import React, { Component } from "react";
import { connect } from 'react-redux'
import { getDogsFromApi } from '../Redux/actions'
import CreateForm from "../Components/CreateForm";
import DogCard from '../Components/DogCard'
import SearchForm from "../Components/SearchForm";

class DogsList extends Component {
  state = {
    searchValue: "",
  }

  componentDidMount() {
    this.props.fetchDogs()
  }

  renderDogs = () => {
    let filteredArray = this.props.api.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    return filteredArray.map(el => <DogCard key={el.id} dog={el} />)
  }

  submitHandler = (dogObj) => {
    console.log("submitting", dogObj);
    // take the dogObj
    // add dogObj to our current api in state 
    // [1,2,3]
    this.setState({ api: [...this.props.api, dogObj] });
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

function mdp(dispatch) {
  return { fetchDogs: () => dispatch(getDogsFromApi()) }
}
function msp(state) {
  return { api: state.api }
}

export default connect(msp, mdp)(DogsList);
