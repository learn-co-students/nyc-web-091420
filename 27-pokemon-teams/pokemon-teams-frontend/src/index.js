const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const renderPokemon = (pokemonObj, ul) => {
  // create the element(s)
  const li = document.createElement("li")
  li.innerHTML = `
  ${pokemonObj.nickname} (${pokemonObj.species}) <button class="release" data-pokemon-id="${pokemonObj.id}">Release</button>
  `
  // when the delete btn is clicked
  const deleteBtn = li.querySelector("button")

  const handleDeleteClick = () => {
    li.remove()

    // DELETE /pokemons/:id
    // console.log(pokemonObj.id)
    const config = {
      method: "DELETE"
    }
    
    fetch(POKEMONS_URL + `/${pokemonObj.id}`, config)
      // .then(r => r.json())
      // .then(() => {
      //   // remove the pokemon li
       
      // })
  }
  deleteBtn.addEventListener("click", handleDeleteClick)

  // append to the ul
  ul.append(li)
}


const renderTrainer = trainerObj => {
  // create outer card element
  const card = document.createElement("div")
  card.className = "card"
  card.dataset.id = trainerObj.id

  // create the inner elements (innerHTML or createElement)
  const p = document.createElement("p")
  p.textContent = trainerObj.name

  const button = document.createElement("button")
  button.dataset.trainerId = trainerObj.id
  button.textContent = "Add Pokemon"

  const ul = document.createElement("ul")

  button.addEventListener("click", () => {
    const id = button.dataset.trainerId
    // console.log(button.dataset)
    // console.log(trainerObj.id)

    // send POST /pokemons with the id
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trainer_id: id
      })
    }

    fetch(POKEMONS_URL, config)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("woops, something went wrong :(")
        }
      })
      .then(newPokemonObj => {
        // when i get the response, add the new pokemon to the page
        console.log(newPokemonObj)
        // if the data has a key of error, don't run any more code!
        // if (newPokemonObj.error) return;
        
        renderPokemon(newPokemonObj, ul)
      })
      .catch(data => {
        console.log("ERROR", data)
      })

    // POST /pokemons
    // Required Headers:
    // {
    //   'Content-Type': 'application/json'
    // }
    // Required Body:
    // {
    //   "trainer_id": 1
    // }
  })
  
  // create some lis inside the ul
  trainerObj.pokemons.forEach(pokemonObj => {
    renderPokemon(pokemonObj, ul)
  })
  
  card.append(p, button, ul)

  // append to some parent element
  const main = document.querySelector("main")
  main.append(card)
}

// when the page loads
// make a GET /trainers
fetch(TRAINERS_URL)
  .then(r => r.json())
  .then(trainersArray => {
    // for each trainer, display some HTML
    trainersArray.forEach(trainerObj => {
      renderTrainer(trainerObj)
    })
  })
