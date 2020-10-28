document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const movesContainer = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")

  // movesContainer.addEventListener("click", function(event) {
  //   // have some condition to check that element is the one you care about
  //   if (event.target.matches("li")) {
  //     event.target.remove()
  //   }
  // })




  
  moveButton.addEventListener("click", function() {

    const intervalID = setInterval(function() {

      const firstLi = movesContainer.querySelector("li")

      if (firstLi) {
        const direction = firstLi.textContent.toLowerCase()
        move(direction)
        firstLi.remove()
      } else {
        clearInterval(intervalID)
      }

    }, 500)
    
  })

  function createMoveLi(direction) {
     // step 1: create element
     const moveLi = document.createElement("li")
     // step 2: snaz it up (assign some properties to it)
     moveLi.textContent = direction

     moveLi.addEventListener("click", function() {
       moveLi.remove()
     })

     // step 3: append to the page / slap it on the DOM
     movesContainer.append(moveLi)
  }

  document.body.addEventListener("keydown", function(event) {
    if (event.code.startsWith("Arrow")) {
      const direction = event.code.replace("Arrow", "")
      createMoveLi(direction)
    }
  })
});
