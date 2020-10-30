let addToy = false;
const API_URL = "http://localhost:3000/toys"

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // function renderToy(toyObj) {
  const renderToy = toyObj => {
    // display a card for each toy
    // create the outer element
    const cardDiv = document.createElement("div")
    // assign any classes etc to it
    cardDiv.classList.add("card")

    // use innerHTML to create the inner elements
    cardDiv.innerHTML = `
      <h2>${toyObj.name}</h2>
      <img src=${toyObj.image} class="toy-avatar" />
      <p>${toyObj.likes} Likes </p>
      <button data-id="${toyObj.id}" class="like-btn">Like <3</button>
    `

    // slap it on the DOM (toy-collection)
    const collectionDiv = document.querySelector("#toy-collection")
    collectionDiv.append(cardDiv)
  }

  const renderAllToys = toyArray => {
    for (let toyObj of toyArray) {
      renderToy(toyObj)
    }
  }

  // Deliverable 1
  // when the page loads
  // make a GET /toys
  fetch(API_URL)
    .then(r => r.json())
    .then(toyArray => {
      renderAllToys(toyArray)
    })

  // Deliverable 2
  const toyForm = document.querySelector(".add-toy-form")
  toyForm.addEventListener("submit", event => {
    // ALWAYS DO THIS FOR FORM SUBMITS!
    event.preventDefault()
    
    // make a POST /toys
      // get the user input from the form
    const name = event.target.name.value
    const image = event.target.image.value

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image,
        "likes": 0
      }),
    })
      .then(r => r.json())
      .then(newToy => {
        // when we get the new toy from the server
        // slap it on the DOM
        renderToy(newToy)
        event.target.reset()
      })
  })
  
  // Deliverable 3
  // When a like btn is clicked
  // find a parent of all the like btns
  const collection = document.querySelector("#toy-collection")
  // add event listener
  collection.addEventListener("click", event => {
    // use a condition to check if it was like btn clicked
    if (event.target.matches(".like-btn")) {
      const likesPTag = event.target.previousElementSibling
      const likeCount = parseInt(likesPTag.textContent)
      const newLikes = likeCount + 1
      const id = event.target.dataset.id

      // make a PATCH /toys/:id
      // send the number of likes
      const bodyObj = {
        likes: newLikes
      }

      fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj),
      })
      .then(r => r.json())
      .then(updatedToy => {
        console.log(updatedToy)
        // pessimistic approach:
        likesPTag.textContent = `${updatedToy.likes} Likes`
      })

      // update the number of likes on the DOM
      // optimistic approach:
      // likesPTag.textContent = `${newLikes} Likes`
      
    }
  })


});
