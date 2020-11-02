document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;  

  console.log({ form, jokeList })

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => {
      console.log("1st .then")
      return res.json()
    })
    .then(jokeData => {
      console.log("2nd .then")
      joke = jokeData.joke
    })
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const username = document.getElementById('name-input').value
    
    // guard clause!
    if(username === "") return;
    
    const myPromise = fetchJoke()
    
    myPromise.then(() => {
      console.log("3rd .then")
      // this will run as soon as we make the request
      // (not when we get the response)
      const newJokeLi = document.createElement('li')
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi)
  
      event.target.reset()
    })

  })
})
