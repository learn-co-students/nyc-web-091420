let currentSpiceId = 1


/**** DOM Elements ****/ 
const imageTag = document.querySelector(".detail-image")
const titleTag = document.querySelector(".title")
const ingredientsListUl = document.querySelector(".ingredients-list")
const updateForm = document.querySelector("#update-form")
const ingredientForm = document.querySelector("#ingredient-form")
const spiceImageList = document.querySelector("#spice-images")

/**** Render Function ****/ 
const renderSpiceImage = spiceObj => {
  // append each image in an img tag within the #spice-images div
  const imgTag = document.createElement("img")
  imgTag.src = spiceObj.image
  imgTag.alt = spiceObj.title

  imgTag.addEventListener("click", () => {
    currentSpiceId = spiceObj.id
    console.log(currentSpiceId)
    // make a GET /spiceblend/:id
    getOneSpice(spiceObj.id)
    // update the DOM to show that spice's info
  })
  spiceImageList.append(imgTag)
}

const renderIngredient = ingredientObj => {
  // - create a li tag
  const li = document.createElement("li")
  li.textContent = ingredientObj.name
  // - append to the ingredient list
  ingredientsListUl.append(li)
}

const renderSpice = spiceObj => {
  // slap the title, and ingredients on the DOM
  imageTag.src = spiceObj.image
  imageTag.alt = spiceObj.title
  titleTag.textContent = spiceObj.title
  
  // go thru the ingredients for the spice
  ingredientsListUl.innerHTML = ""
  spiceObj.ingredients.forEach(renderIngredient)
}


/**** Event Handlers ****/ 
ingredientForm.addEventListener("submit", event => {
  event.preventDefault()
  // const ingredientValue = event.target.name.value
  const ingredientValue = document.querySelector("#ingredient-name").value
  const ingredientObj = {
    name: ingredientValue,
    spiceblendId: currentSpiceId
  }

  addIngredient(ingredientObj)
})



updateForm.addEventListener("submit", event => {
  event.preventDefault()
  
  const updateObj = {
    title: event.target.title.value
  }
  updateTitle(updateObj)

  // optimistic! (not waiting for the fetch)
  titleTag.textContent = updateObj.title

})


/**** Fetch Functions ****/ 
const addIngredient = (ingredientObj) => {
  fetch("http://localhost:3000/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ingredientObj)
  })
    .then(r => r.json())
    .then(renderIngredient)
}

const updateTitle = (updateObj) => {
  fetch(`http://localhost:3000/spiceblends/${currentSpiceId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateObj)
  })
    .then(r => r.json())
    .then(updatedSpice => {
      // pessimistic! (waiting for the fetch)
      // titleTag.textContent = updatedSpice.title
    })
}

const getOneSpice = (id) => {
  fetch(`http://localhost:3000/spiceblends/${id}`)
    .then(r => r.json())
    .then(spiceObj => {
      renderSpice(spiceObj)
    })
}

const getAllSpices = () => {
  fetch("http://localhost:3000/spiceblends")
    .then(r => r.json())
    .then(spiceArray => {
      spiceArray.forEach(renderSpiceImage)
    })
}

/**** Initialize *****/ 
getOneSpice(1)
getAllSpices()
