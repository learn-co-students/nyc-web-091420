const renderQuote = quoteObj => {
  console.log(quoteObj)
  const quoteUl = document.querySelector("#quote-list")
  const quoteLi = document.createElement("li")
  quoteLi.setAttribute("class", "quote-card")
  quoteLi.dataset.id = quoteObj.id

  const blockQuote = document.createElement("blockquote")
  blockQuote.setAttribute("class", "blockquote")

  blockQuote.innerHTML = `
    <p class="mb-0">${quoteObj.quote}</p>
    <footer class="blockquote-footer">${quoteObj.author}</footer>
    <br>
    <button class='btn-success'>Likes: <span>${quoteObj.likes.length}</span></button>
    <button class='btn-danger'>Delete</button>
  `

  quoteLi.append(blockQuote)
  // create a card with document.createElement, populate it with innerHTML
  quoteUl.append(quoteLi)
}

const renderQuotes = quotes => {
  // iterate through the data based on the information in the objects
// pull out elements
  quotes.forEach(quote => renderQuote(quote))
}



// find the form on the page
const form = document.querySelector("#new-quote-form")
// add an event listener for the form submit

const submit = event => {
  // write a function with the event
  // make sure to prevent the default
  event.preventDefault()
    // target the two different new quote and author inputs
    // const quoteInput = form.quote.value
    const quoteInput = document.querySelector("#new-quote").value
    const authorInput = document.querySelector("#author").value

    // make it into an object that we can send to the database
    const quoteData = {
      quote: quoteInput,
      author: authorInput,
      // likes: []
    }

    fetch("http://localhost:3000/quotes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    })
    .then(response => response.json())
    .then(newQuoteObject => {
      newQuoteObject.likes = []
      // push it to the function to render the quote to the page
      renderQuote(newQuoteObject)
    })

    // reset the form
    event.target.reset()
}

form.addEventListener("submit", submit)







console.log("BEFORE getting quotes")
const url = "http://localhost:3000/quotes?_embed=likes"
fetch(url)
  .then(response => response.json())
  .then(quotesArray => {
    console.log("NOW WE HAVE THE quotes")
    renderQuotes(quotesArray)
  })


console.log("AFTER getting quotes")
const buttons = document.getElementsByClassName("btn-danger")
console.log(buttons)

const quoteListClickHandler = (event) => {
  // when it's clicked, 
  if (event.target.textContent === "Delete") {
    // get the id from the quote that we're deleting
    const cardLi = event.target.parentElement.parentElement
    const id = cardLi.dataset.id
    
    // make a fetch request to remove the quote from the database
    const url = "http://localhost:3000/quotes/" + id
    fetch(url, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // pessimistic!
        cardLi.remove()
      })
    
    // optimistic!
    // remove that instance of the quote from the page
    // cardLi.remove()
  }

  if (event.target.matches(".btn-success")) {
    const likeButton = event.target
    const card = likeButton.closest(".quote-card")
    const id = parseInt(card.dataset.id)

    const likesSpan = event.target.children[0]
    const newLikes = parseInt(likesSpan.textContent) + 1
    likesSpan.textContent = newLikes


    const likeObject = {
      quoteId: id,
      createdAt: Date.now()
    }

    fetch("http://localhost:3000/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(likeObject)
    })
      .then(response => response.json())
      .then((likes) => {
        console.log(likes)
      })
  }
}

// find the location for the delete button
const idContainer = document.querySelector("#quote-list")
idContainer.addEventListener("click", quoteListClickHandler)


// Clicking the like button will create a like for this particular quote in the API and update the number of likes displayed on the page without having to refresh.

// Use a POST request to http://localhost:3000/likes
// The body of the request should be a JSON object containing a key of quoteId, with an integer value. Use the ID of the quote you're creating the like for — e.g. { quoteId: 5 } to create a like for quote 5.
// IMPORTANT: if the quoteID is a string for some reason (for example, if you've pulled the ID from a dataset) the index page will not include the like you create on any quote.

// select the like button
// create an event listener for when its clicked
// create the behavior to change the like button when it's clicked (increase the likes)
// make a POST request - with the quoteId in the body
// after changing the value in the database, we need to show it on the page
// update the number of likes on the DOM

