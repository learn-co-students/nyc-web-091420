import React, { Component } from "react";
import { apiResponse } from '../api'
import CreateForm from "../Components/CreateForm";
import DogCard from '../Components/DogCard'
import SearchForm from "../Components/SearchForm";

class DogsList extends Component {
  state = {
    api: apiResponse,
    searchValue: "",
  }

  renderDogs = () => {
    // filter and find all the dogs that match
    let filteredArray = this.state.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    // map through the filtered array 
    // filter => if you're matching "" it always returns true
    return filteredArray.map(el => <DogCard key={el.id} dog={el} />)
  }

  submitHandler = (dogObj) => {
    console.log("submitting", dogObj);
    // take the dogObj
    // add dogObj to our current api in state 
    // [1,2,3]
    this.setState({ api: [...this.state.api, dogObj] });
  };

  searchChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };


  render() {
    return (
      <>
        <CreateForm submitHandler={this.submitHandler} />
        <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler} />
        <div className="list">{this.renderDogs()}</div>
      </>
    );
  }
}

export default DogsList;
