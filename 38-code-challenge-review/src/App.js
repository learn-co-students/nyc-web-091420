import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    api: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({ api: poems }))
      .catch(console.log)
  }

  submitHandler = (poemObj) => {
    // console.log("submitting", poemObj)
    // Back End action: 
    // make a fetch request
    // POST
    // sending in the body
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(poemObj)
    })
      .then(resp => resp.json())
      // Front End action: 
      // update state 
      // update the api in state to align with the data in our database
      .then(newObj => this.setState({ api: [...this.state.api, newObj], showForm: false }))
      .catch(console.log)

  }

  clickHandler = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    // expected outcome: 1st render => empty array; 2nd render => array of length 4
    console.log("State in App", this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.submitHandler} />
            :
            null
          }
        </div>
        <PoemsContainer poems={this.state.api} />
      </div>
    );
  }
}

export default App;
