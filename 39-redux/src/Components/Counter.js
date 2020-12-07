import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log("Counter props:", props)
    return (
        <h2>Counter: {props.num}</h2>
    )
}

function msp(state) {
    // subscribe to ONLY the num key of state
    return { num: state.num }
}


// mapStateToProps
// msp
// Higher Order Component
// A parent component that returns a child component
// Higher Order Function
// Name of the parent function that returns a child function that is defined inside of it 

export default connect(msp)(Counter)