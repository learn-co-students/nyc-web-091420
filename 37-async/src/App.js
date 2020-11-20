import React, { Component } from "react";
import "./App.css";
import BarkCounter from "./Components/BarkCounter";
import DogsList from './Containers/DogsList'
class App extends Component {
  state = {
    counter: 0
  };

  clickHandler = () => {
    this.setState({ counter: ++this.state.counter });
  };
  render() {
    console.log(this.state.counter)
    return (
      <div className="app">
        <BarkCounter counter={this.state.counter} />
        <DogsList appClickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
