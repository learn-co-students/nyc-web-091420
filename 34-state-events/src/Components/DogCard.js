import React, { Component } from "react";

// props = {dog}
class DogCard extends Component {
  // let { dog } = props
  // construction(props){
  //   super(props)
  //   this.state = {clicked: false}
  // }

  state = {
    clicked: false
  }

  clickHandler = () => {
    console.log("before setState clicking", this.state.clicked)
    this.setState({ clicked: !this.state.clicked }, () => console.log("after setState clicking", this.state.clicked)
    )

    // functional setState
    // this.setState((prevState) => ({ clicked: !prevState.clicked }))

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
          <button onClick={this.clickHandler}>Bark</button>
          {this.state.clicked ? (<h2>Bark</h2>) : null}
        </span>
      </div>
    );
  }
}


// state
// lifecycle method 

export default DogCard;
