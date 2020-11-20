import React from "react";
import EditForm from "./EditForm";

class DogCard extends React.Component {

  state = {
    clicked: false,
    showEditForm: false
  };

  clickHandler = () => {
    if (this.state.clicked) {
      this.props.appClickHandler()
    }
    // this.props.appClickHandler()
    this.setState({ clicked: !this.state.clicked });
  };

  dogCardSubmitHandler = () => {
    this.setState({ showEditForm: false });
  };

  // renderBark = () => {
  //   if (this.state.clicked) {
  //     return <h2>Bark</h2>;
  //   }
  // };
  render() {
    const { dog } = this.props;
    return (
      <div className="card">
        <span className="content">
          {this.state.showEditForm ?

            <EditForm dog={dog} submitHandler={this.props.editSubmitHandler} dogCardSubmitHandler={this.dogCardSubmitHandler} />

            :

            <h2 onClick={() => this.setState({ showEditForm: true })}>{dog.name}</h2>}

          <img alt="dog" src={dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
          {/* {this.renderBark()} */}
          {this.state.clicked ? <h2>Bark</h2> : null}
        </span>
      </div>
    );

  };
}

export default DogCard;
