# JS Mini Challenge: Practical OOJS

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). If you worked with a partner, you can tag your partner on the pull request.

## Assignment

We're going to be refactoring the code from our previous mini-challenges to use OOJS and give our code some better organization.

The approach we're going to be taking to writing OOJS will be to create a class representing a `PlayerComponent` for displaying information about each player on the page.

> There are many ways to leverage OOJS to organize our code, but the approach below should be helpful to start thinking like a React developer and get you in a good mindset for Phase 4! The code we're writing isn't going to be exactly the same as you'll see next phase, but some of the design patterns will be similar.

The responsibilities of our `PlayerComponent` class will be:

- Keep track of the data associated with a player
- Render the player to the DOM
- Handle any events associated with the player

We'll tackle each of these steps one-by-one to build out our `PlayerComponent` class.

You can use [this MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for a reference on class syntax. Focus on the `class` keyword; `this`; `constructor`; and method definitions - we won't need any of the more advanced syntax for this example.

## Setup

This Mini Challenge uses `json-server` to create a RESTful server using a `.json` file. Start `json-server` and have it use the `db.json` file in this directory as its database:

```sh
$ json-server --watch db.json
```

To check if your server is running, open [http://localhost:3000/players](http://localhost:3000/players) in your browser. You should see an array of all the players from the `db.json` file.

## Deliverable 1: Create a `PlayerComponent` class

First, make a new file called `PlayerComponent.js` in the `src` directory. Then, in the `index.html` file, add a `<script>` tag to load in your new file (make sure to add the script tag **above** the `index.js` script tag).

In your `PlayerComponent.js` file, make a `PlayerComponent` class. On the class, define the constructor method to take in one parameter: a `player`. Save the player data to the instance of your `PlayerComponent` as a property called `player`.

At this point, test your code! Run this in the console:

```js
const playerObj = {
  id: 1,
  number: 11,
  name: "Mo Salah",
  nickname: "The Egyptian King",
  photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg",
  likes: 1003
}
const playerComponent = new PlayerComponent(playerObj)

console.log(playerComponent.player)
// should return the playerObj
console.log(playerComponent.player === playerObj)
// should return true
```

Once you get this working, go into the `index.js` file and uncomment the code on lines 82-83 of the initialize function, so it looks like this:

```js
const initialize = () => {
  
  // fetch
  const url = `${BASE_URL}/players`
  fetch(url)
    .then(r => r.json())
    .then(players => {
      players.forEach(playerObj => {
        const playerComponent = new PlayerComponent(playerObj)
        console.log(playerComponent)
        // playerComponent.render(playerContainer)
        renderPlayer(playerObj)
      })
    })
}
```

If you see your new `PlayerComponent` instances in the console when you run this code, congrats! It's time to move on to the next deliverable.

<details>
  <summary>Click to show solution (don't give up too early!)</summary>
  
  ```js
  class PlayerComponent {
    constructor(player) {
      this.player = player
    }
  }
  ```
</details>

## Deliverable 2: Create a `.render()` method

In your `PlayerComponent` class, create an instance method called `render`. We'll use this to write the logic for displaying each component on the page. It should take in one argument: a `parentElement`.

We'll use it like this to render each player component inside of the player container:

```js
playerComponent.render(playerContainer)
```

Go back to the `index.js` file and copy all the code from inside the `renderPlayer` function (lines 39-70). Paste that code inside the `.render()` method in your `PlayerComponent`.

We'll need to make a few changes to the code since we no longer have access to the same variables. 

First, find a way to get access to the `playerObj` from the data available to you inside the class. In our other function, we defined the `playerObj` as a parameter; here, we don't have that parameter defined. Where else can we access that data?

Next, find where we're using the `playerContainer` variable, and replace that with the `parentElement` parameter.

Finally, we want a way to save the `playerDiv` element so we can access it from other methods. Save `playerDiv` tp the instance of your `PlayerComponent` as a property called `element`

Next, test out your solution! We should be able to use the `.render()` method in place of our `renderPlayer` function in the `index.js` file. Update your `initialize` function to look like this:

```js
const initialize = () => {
  
  // fetch
  const url = `${BASE_URL}/players`
  fetch(url)
    .then(r => r.json())
    .then(players => {
      players.forEach(playerObj => {
        const playerComponent = new PlayerComponent(playerObj)
        console.log(playerComponent)
        playerComponent.render(playerContainer)
        // renderPlayer(playerObj)
      })
    })
}
```

The same approach should also work when we create a new player by submitting the form. You can try it out in the `handleNewPlayerSubmit` function as well:

```js
  fetch(url, config)
    .then(r => r.json())
    .then(playerObj => {
      const playerComponent = new PlayerComponent(playerObj)
      console.log(playerComponent)
      playerComponent.render(playerContainer)
      // renderPlayer(playerObj)
    })
```

If that works, you can move on to the next deliverable!

<details>
  <summary>Click to show solution (don't give up too early!)</summary>
  
  ```js
  class PlayerComponent {
    constructor(player) {
      this.player = player
    }

    render(parentElement) {
      this.element = document.createElement("div")

      this.element.className = "player"
      this.element.dataset.number = this.player.number

      this.element.innerHTML = `
        <h3>${this.player.name} (<em>${this.player.nickname}</em>)</h3>
        <img src="${this.player.photo}" alt="${this.player.name}">
        <p class="likes">${this.player.likes} likes</p>
        <button class="like-button">❤️</button>
      `

      const likeButton = this.element.querySelector(".like-button")
      likeButton.addEventListener("click", () => {
        this.player.likes++
        const likesPTag = this.element.querySelector(".likes")
        likesPTag.textContent = `${this.player.likes} likes`

        // fetch
        const url = `${BASE_URL}/players/${this.player.id}`
        const config = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ likes: this.player.likes })
        }

        fetch(url, config)
      })

      parentElement.append(this.element)
    }
  }
  ```
</details>

## Deliverable 3: Create a `.like()` method

Next, we'll work on separating out the functionality of "liking" a player from the log for rendering a player. 

First, create a method in your `PlayerComponent` called `like()`. It should be defined using an *arrow function* - this is **very important** because we'll be using this as a callback, and we need to ensure we keep track of the right context (`this`) when the function is invoked.

> Any time you are using an instance method from a class as a callback function, it's important to make it an arrow function, since arrow functions don't create their own `this`. If you don't use an arrow function for callbacks, the `this` keyword will give you something other than the instance of your class. Keep this in mind for React!!!

You can create an arrow function in a class using this syntax:

```js
class PlayerComponent {

  // arrow function definition for and instance method
  like = () => {
    // function body
  }
}
```

We'll use the code from the callback function on the `addEventListener` for our `likeButton`, in the `.render()` method, to create the `.like()` method. Try moving the code from the callback function code from the `addEventListener` to your `.like()` method, and use a reference to your `.like()` method in the `addEventListener` instead.

After refactoring, you should be able to use your `.like()` method like this:

```js
  // in .render()
  const likeButton = this.element.querySelector(".like-button")
  likeButton.addEventListener("click", this.like)
```


<details>
  <summary>Click to show solution (don't give up too early!)</summary>
  
  ```js
  class PlayerComponent {
    constructor(player) {
      this.player = player
    }

    render(parentElement) {
      this.element = document.createElement("div")

      this.element.className = "player"
      this.element.dataset.number = this.player.number

      this.element.innerHTML = `
        <h3>${this.player.name} (<em>${this.player.nickname}</em>)</h3>
        <img src="${this.player.photo}" alt="${this.player.name}">
        <p class="likes">${this.player.likes} likes</p>
        <button class="like-button">❤️</button>
      `

      const likeButton = this.element.querySelector(".like-button")
      likeButton.addEventListener("click", this.like)

      parentElement.append(this.element)
    }

    // like method
    like = () => {
      this.player.likes++
      const likesPTag = this.element.querySelector(".likes")
      likesPTag.textContent = `${this.player.likes} likes`

      // fetch
      const url = `${BASE_URL}/players/${this.player.id}`
      const config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ likes: this.player.likes })
      }

      fetch(url, config)
    }
  }
  ```
</details>

## BONUS: Add Delete Functionality

Congrats on getting this far! Now that we've got this component all set up, try adding a delete functionality, using the code we wrote for the like button as a guide. Some things to keep in mind:

- You'll need to add a delete button, and set up an event listener on it
- You'll also need a new delete method in your class to handle the delete functionality
- When the delete button is clicked, the player should be removed from the backend (make a `fetch` request) and also removed from the page.