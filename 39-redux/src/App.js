import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import Counter from './Components/Counter'

class App extends Component {
  render() {
    return (
      <div className="app" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <DogsList />
        <Counter />
      </div>
    );
  }
}


export default App;
