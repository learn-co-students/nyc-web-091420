import { INCREMENT_COUNTER, FETCH_DOGS } from './actionTypes'

// action: an object with a key of type
// action creators: a function that creates an action


export function incrementCounter() {
    return { type: INCREMENT_COUNTER }
}

export function getDogsFromApi() {
    console.log("Inside of action creater")
    return function (dispatch) {
        fetch('http://localhost:5000/dogs')
            .then(resp => resp.json())
            // send data to the reducer 
            // ?
            .then(data => dispatch({ type: FETCH_DOGS, payload: data }))

    }
}

