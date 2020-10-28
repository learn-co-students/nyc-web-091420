// 4. As a user, I can pause the counter, which should 

//   * pause the counter
//   * disable all buttons except the pause button
//   * the pause button should then show the text "resume."

//   When 'resume' is clicked, it should restart the counter and re-enable the buttons.



const counterH1 = document.querySelector("#counter")
const buttonGroup = document.querySelector("#button-group")
const likesUl = document.querySelector(".likes")
const pauseBtn = document.querySelector("#pause")

buttonGroup.addEventListener("click", event => {
  if (event.target.id === "plus") {
    changeCounter(1)
  } else if (event.target.matches("#minus")) {
    changeCounter(-1)
  } else if (event.target.id === "heart") {
    updateLikes()
  } else if (event.target.id === "pause") {
    togglePause()
  }
})

// Application State
let counter = 0
let likedNumbers = {}
let paused = false
// { 3: 1, 5: 2 }

// run a timer in js
setInterval(() => {
  // change the number in #counter element by 1
  if (!paused) {
    changeCounter(1)
  }
}, 1000)

function togglePause() {
  paused = !paused
//   * disable all buttons except the pause button
  const allBtns = document.querySelectorAll("button")
  allBtns.forEach(btn => {
    if (btn.id !== "pause") {
      btn.disabled = paused
    }
  })

  //   * the pause button should then show the text "resume."
  if (paused) {
    pauseBtn.textContent = "resume"
  } else {
    pauseBtn.textContent = "pause"
  }
}


function updateLikes() {
  // if the number has been liked
  if (likedNumbers[counter]) {
    likedNumbers[counter] += 1
    // update the likes for that number in the ul.likes
    // find the li that's associated with the current counter
    const li = document.querySelector(`[data-number='${counter}']`)
    li.textContent = `${counter} has been liked ${likedNumbers[counter]} times`
  } else {

    likedNumbers[counter] = 1
    // create a new li inside the ul.likes
    const li = document.createElement("li")
    // show the number of likes for the current number
    li.textContent = `${counter} has been liked 1 time`
    li.dataset.number = counter
    likesUl.append(li)
  }

  console.log(likedNumbers)
}

function changeCounter(changeAmount) {
  counter = counter + changeAmount
  counterH1.textContent = counter
}