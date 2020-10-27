# JS Mini Challenge: DOM Manipulation

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

Today, we'll be building a prototype of a small application about Ian's favorite soccer team, Liverpool FC. If you don't like Liverpool, 1. sorry, and 2. feel free to change the data and personalize your app!

There's a section in this Readme file for your notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

A note on notation: when you see an element like `h1#header` in the Readme, that refers to the element's tag name and the CSS selector. For example, `h1#header` looks like this in the HTML:

```html
<h1 id="header">Some text here</h1>
```

And `div.players-container` looks like this (note the CSS class selector syntax):

```html
<div class="player-container">
  <!-- child elements here -->
</div>
```

## Deliverable 1

Open the `index.html` file in your browser and check the console in Chrome Dev Tools. You'll notice the console.log from line 2 of the `index.js` file is returning `null` instead of showing the `h1#header` element.

Figure out what you need to change to give Javascript access to the `h1#header` element.

**YOUR NOTES**
```

```

## Deliverable 2

Now that you have access to the `h1#header` element, use Javascript to change the element's font color to red (of course).

**YOUR NOTES**
```

```

## Deliverable 3

Now that we've got a beautiful red header, we can show some players on the page. The player data is stored in a variable called `PLAYERS` in the `data.js` file - you can still access that variable in your `index.js` file (see if you can figure out why!).

First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. *For each* player in our application, we want to render their information on the DOM inside the `div#player-container` element. 

Create a DOM element that looks like this for each player and append it to the `div.player-container`:

```html
<div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div>
```

**YOUR NOTES**
```

```

## Deliverable 4

Uh-oh! A Manchester City player, Raheem Sterling, snuck into our list. Use Javascript to find the element with the `[data-number='7']` attribute, and remove that element from the page.

Hint: You can use `querySelector` with [CSS Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) to find an element with a specific data-number. 

**YOUR NOTES**
```

```
