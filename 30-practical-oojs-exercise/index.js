const BASE_URL = "http://localhost:3000"

/***** DOM Elements *****/
const playerContainer = document.querySelector(".player-container")
const newPlayerForm = document.querySelector("#new-player-form")

/***** Event Handlers *****/
const handleNewPlayerSubmit = event => {
  event.preventDefault()

  const playerData = {
    number: newPlayerForm.number.value,
    name: newPlayerForm.name.value,
    nickname: newPlayerForm.nickname.value,
    photo: newPlayerForm.photo.value,
    likes: 0
  }

  // fetch
  const url = `${BASE_URL}/players`
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(playerData)
  }

  fetch(url, config)
    .then(r => r.json())
    .then(playerObj => {
      // const playerComponent = new PlayerComponent(playerObj)
      // console.log(playerComponent)
      // playerComponent.render(playerContainer)
      renderPlayer(playerObj)
    })
}

/***** Event Listeners *****/
newPlayerForm.addEventListener("submit", handleNewPlayerSubmit)


/***** Initialize *****/
const initialize = () => {
  
  // fetch
  const url = `${BASE_URL}/players`

  fetch(url)
    .then(r => r.json())
    .then(players => {

      players.forEach(playerObj => {
        const pContainer = new PlayerContainer(playerObj)
        console.log(pContainer)
        console.log(pContainer.element)

        
        pContainer.render(playerContainer)



        console.log(pContainer.element)


        // playerComponent.render(playerContainer)
        // renderPlayer(playerObj)
      })
    })
}

initialize()