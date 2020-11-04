// - Add a new **ingredient** to the spice blend when the `#ingredient-form` is submitted. The new ingredient should be displayed on the page (no persistence needed for now).

/**** DOM Elements ****/ 
const imageTag = document.querySelector(".detail-image")
const titleTag = document.querySelector(".title")
const ingredientsListUl = document.querySelector(".ingredients-list")
const updateForm = document.querySelector("#update-form")
const ingredientForm = document.querySelector("#ingredient-form")

/**** Render Function ****/ 
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
  spiceObj.ingredients.forEach(renderIngredient)
}


/**** Event Handlers ****/ 
ingredientForm.addEventListener("submit", event => {
  event.preventDefault()
  // const ingredientValue = event.target.name.value
  const ingredientValue = document.querySelector("#ingredient-name").value
  const ingredientObj = {
    name: ingredientValue
  }
  // add a new li inside the ingredient list
  renderIngredient(ingredientObj)
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
const updateTitle = (updateObj) => {
  fetch("http://localhost:3000/spiceblends/1", {
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

const getFirstSpice = () => {
  fetch("http://localhost:3000/spiceblends/1")
    .then(r => r.json())
    .then(firstSpice => {
      renderSpice(firstSpice)
    })
}

/**** Initialize *****/ 
getFirstSpice()
