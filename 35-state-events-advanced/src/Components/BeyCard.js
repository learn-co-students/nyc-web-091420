import React from "react";

const BeyCard = (props) => {
  // props => {bey: {} , clickHandler: f()}
  // let bey = props.bey
  const { bey, clickHandler } = props;
  const localClickHandler = () => {
    console.log("clicking")
    clickHandler(bey.id)
  };

  return (
    <div className="card" onClick={localClickHandler}>
      <img alt="beyonce" src={bey.img} />
      <h2>{bey.name}</h2>
    </div>
  );
};

export default BeyCard;

// ()=>
// ()=> {return }