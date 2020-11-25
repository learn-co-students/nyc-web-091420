import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    //should render 4 Poems
    // show the title, author, etc... 
    return this.props.poems.map(poem => <Poem key={poem.id} poem={poem} />)
    // console.log("poems", poems)
  }
  render() {

    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    );
  }
}

export default PoemsContainer;
