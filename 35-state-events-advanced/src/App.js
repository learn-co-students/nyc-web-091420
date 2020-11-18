import React from "react";
import api from './api'
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'


class App extends React.Component {
  state = {
    api,
    favorite: []
  };

  addToFavorites = (id) => {
    console.log("ID in App", id);
    // look through my api
    // find the object in question
    let newArray = [...this.state.api]; //do not directly mutate state
    let foundObj = newArray.find(el => el.id === id);
    // change the favorite key
    foundObj.favorite = true;
    // rerender so Favorites Container can see the change
    this.setState({ api: newArray });
  };


  removeFromFavorites = (id) => {
    console.log("ID in App", id);
    // look through my api
    // find the object in question
    let newArray = [...this.state.api]; //do not directly mutate state
    let foundObj = newArray.find(el => el.id === id);
    // change the favorite key
    foundObj.favorite = false;
    // rerender so Favorites Container can see the change
    this.setState({ api: newArray });
    window.alert("hot sauce...swag");
  };

  findAllFavorites = () => {
    return this.state.api.filter(el => el.favorite);
  };

  render() {
    console.log("State in App", this.state)
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.api} clickHandler={this.addToFavorites} />
        <Favorites beyArray={this.findAllFavorites()} clickHandler={this.removeFromFavorites} />
      </div>
    );
  };
};

export default App;
