const ramenMenu = document.querySelector("#ramen-menu")
const ramenForm = document.querySelector("#ramen-rating")
const ratingInput = document.querySelector("#rating")
const comment = document.querySelector("#comment")
const newRamenForm = document.querySelector("#new-ramen")
// let currentId = null

newRamenForm.addEventListener("submit", e => {
  e.preventDefault()
  // POST /ramens
  // { name, restaurant, image, rating, comment }
  const newRamenObj = {
    name: newRamenForm.name.value,
    restaurant: newRamenForm.restaurant.value,
    image: newRamenForm.image.value,
    rating: parseInt(newRamenForm.rating.value),
    comment: newRamenForm["new-comment"].value
  }
  addRamen(newRamenObj)
})

ramenForm.addEventListener("submit", e => {
  e.preventDefault()
  
  const ramenId = ramenForm.dataset.id
  const updateObj = {
    rating: parseInt(ratingInput.value),
    comment: comment.value
  }
  
  // fetch
  updateRamen(ramenId, updateObj)
  
})

// event delegation
ramenMenu.addEventListener("click", e => {
  if (e.target.matches("img")) {
    // currentId = e.target.dataset.id
    getRamen(e.target.dataset.id)
  }
  if (e.target.matches("button")) {
    // remove the ramen from the page!
    deleteRamen(e.target.dataset.id)
    e.target.parentElement.remove()
  }
})

/*
<div>
  <img />
  <button />
</div>
*/ 
const renderImage = ramen => {
  const div = document.createElement("div")

  const img = document.createElement("img")
  img.src = ramen.image
  img.alt = ramen.name
  img.dataset.id = ramen.id

  const button = document.createElement("button")
  button.textContent = "X"
  button.dataset.id = ramen.id

  // individual event listener
  // img.addEventListener("click", () => {
  //   getRamen(ramen.id)
  // })
  div.append(img, button)

  ramenMenu.append(div)
}

const renderAllRamens = ramenArray => {
  ramenArray.forEach(renderImage)
}

const renderDetail = ramen => {
  ramenForm.dataset.id = ramen.id

  const img = document.querySelector(".detail-image")
  img.src = ramen.image
  img.alt = ramen.name

  const name = document.querySelector(".name")
  name.textContent = ramen.name

  const restaurant = document.querySelector(".restaurant")
  restaurant.textContent = ramen.restaurant

  ratingInput.value = ramen.rating

  comment.value = ramen.comment
}

const addRamen = newRamen => {
  fetch(`http://localhost:3000/ramens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newRamen)
  })
  .then(r => r.json())
  .then(actualNewRamenFromTheServer => {
    renderDetail(actualNewRamenFromTheServer)
    renderImage(actualNewRamenFromTheServer)
  })
}

const deleteRamen = id => {
  fetch(`http://localhost:3000/ramens/${id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then(console.log)
}


const updateRamen = (id, updateObj) => {
  fetch(`http://localhost:3000/ramens/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateObj)
  })
  .then(r => r.json())
  .then(console.log)
}

const getRamen = id => {
  fetch(`http://localhost:3000/ramens/${id}`)
    .then(r => r.json())
    .then(renderDetail)
}

const getRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then(r => r.json())
    .then(renderAllRamens)
}


getRamens()
getRamen(1)
