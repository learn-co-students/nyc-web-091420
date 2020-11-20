import React, { Component } from "react";
import CreateForm from "../Components/CreateForm";
import DogCard from '../Components/DogCard'
class DogsList extends Component {

  state = {
    api: []
  };

  // async componentDidMount() {
  //   const resp = await fetch('http://localhost:8000/dogs');
  //   const data = await resp.json();
  //   this.setState({ api: data });
  // };

  componentDidMount() {
    fetch('http://localhost:8000/dogs')
      .then(resp => resp.json())
      .then(data => this.setState({ api: data }));
  };

  renderDogs = () => {
    return this.state.api.map(dog => <DogCard key={dog.id} dog={dog} appClickHandler={this.props.appClickHandler} editSubmitHandler={this.editSubmitHandler} />);
  };

  submitHandler = (dogObj) => {
    console.log("Submitting")
    this.setState({ api: [...this.state.api, dogObj] });
    // pessimistic rendering
    // we change the DOM/user experience AFTER we've updated our db
    fetch('http://localhost:8000/dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(dogObj)
    })
      .then(resp => resp.json())
      .then(newDog => this.setState({ api: [...this.state.api, newDog] }))
      .catch(console.log)
    // optimistic rendering
    // we change the DOM BEFORE we've updated our db


    // send a POST request
    // then add it to our state 


  };

  editSubmitHandler = (name, dogId) => {
    console.log(name, dogId)

    fetch(`http://localhost:8000/dogs/${dogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ name })
    })
      .then(resp => resp.json())
      .then(newDog => {
        // find the object in state
        let copiedArray = [...this.state.api]
        let oldDog = copiedArray.find(dog => dog.id === newDog.id)
        let idx = copiedArray.findIndex(dog => dog.id === newDog.id)
        // find where in the array that object lives 
        // let idx = copiedArray.indexOf(oldDog);
        // replace that object with the new object from our response
        // replace with the newDog at that exact index 
        copiedArray[idx] = newDog;
        this.setState({ api: copiedArray });
      })
      .catch(console.log)
  };

  render() {
    return (
      <>
        <CreateForm submitHandler={this.submitHandler} />
        <div className="list">{this.renderDogs()}</div>
      </>
    );
  }
}

export default DogsList;
