import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeys = () => {
    return this.props.beyArray.map(el => <BeyCard clickHandler={this.props.clickHandler} bey={el} key={el.id} />);
  };
  render() {
    console.log("Props in BeyContainer", this.props)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
