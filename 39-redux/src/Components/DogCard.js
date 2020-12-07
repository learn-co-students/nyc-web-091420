import React, { Component } from "react";
import { connect } from 'react-redux'
import { incrementCounter } from '../Redux/actions'
class DogCard extends Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("before setState clicking", this.state.clicked)
    this.setState({ clicked: !this.state.clicked }, () => console.log("after setState clicking", this.state.clicked)
    )
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="card">
        <span className="content">
          <h2 >{dog.name}</h2>
          <img alt="dog" src={dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.props.increment}>Increment Counter</button>
          {this.state.clicked ? (<h2>Bark</h2>) : null}
        </span>
      </div>
    );
  }
}


function mdp(dispatch) {
  // thunk
  return { increment: () => dispatch(incrementCounter()) }
}

// state
// lifecycle method 

export default connect(null, mdp)(DogCard);
