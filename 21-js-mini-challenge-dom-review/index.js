/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
PLAYERS.forEach(function(player) {
  // Step 1: create the outer element and assign some attributes
  const newDiv = document.createElement("div")
  newDiv.classList.add("player")
  newDiv.dataset.number = player.number

  // Step 2: use innerHTML to create children of that outer element
  newDiv.innerHTML = `
    <h3>
      ${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
  `

  // Step 3: add it to some parent element
  document.querySelector(".player-container").append(newDiv)
})

// const container = document.querySelector(".player-container")
// container.innerHTML = ""


// PLAYERS.forEach(function(player) {
//   // create a div
//   const newDiv = document.createElement("div")
//   newDiv.classList.add("player")
//   newDiv.setAttribute("data-number", player.number)

//   // newDiv.innerHTML = `
//   //   <h3>
//   //     ${player.name} (<em>${player.nickname}</em>)
//   //   </h3>
//   //   <img src="${player.photo}" alt="${player.name}">
//   // `

//   // get the player container from the original dom
//   // const container = document.querySelector(".player-container")
//   // container.append(newDiv)
//   document.querySelector(".player-container").append(newDiv)

//   // // create h3
//   const h3 = document.createElement("h3")
//   h3.innerHTML = `
//     ${player.name} (<em>${player.nickname}</em>)
    
//   `
//   const img = document.createElement("img")
//   img.src = player.photo
//   img.alt = player.name

//   newDiv.append(h3, img)

//   // newDiv.innerHTML = `<img src="${player.photo}" alt="${player.name}">`
// })


/* <div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div> */

/***** Deliverable 4 *****/
// document.querySelector("div.player[data-number='7']").remove()

// const datanum = document.querySelector("[data-number='7']")
// console.log(datanum)
// datanum.remove()


// const div = document.querySelector("data-number")
// console.log(div)


// create the element
// assing some attributes
// add to a parent element