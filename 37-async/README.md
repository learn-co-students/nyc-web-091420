# React State and Events - Async

## Questions

- ideal syntax for POST request
  - the function changing state should be in the app with state
  - Where and how? 
- BarkCounter
  - Component vs element  
- prevState => functional setState
  - all the time 


## Instructions

- To get started you must have `JSON Server` installed

  - `npm install json-server`

- To mount the server run the following command in this project's root directory:

  - `json-server -w db.json`

- After mounting the server, you will have an api available at `http://localhost:8000/dogs`

## Deliverables

You are given a component called `DogCard`, a container component called `DogsList`, an `App` component

1. Your application render a list of dog images along with a button for each image that has an `innerText` of "Bark"

2. When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText of "Bark"

3. When a User clicks on the button a second time the `<h2>` should be removed from the DOM

4. Add a `BarkCounter` that is a child of `App` and is displayed at the top of the DOM. This should be a counter that increments every time a dog barks

5. A User should be able to add a new dog. This should persist after page refresh

![dog gif](state-pairing-gif.gif)
