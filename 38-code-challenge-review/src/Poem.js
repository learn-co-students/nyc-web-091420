import React from "react";

class Poem extends React.Component {

  state = {
    clicked: false
  };

  clickHandler = () => {
    console.log("clicking")
    this.setState({ clicked: !this.state.clicked })

  }

  render() {
    console.log("Props in Poem", this.props)
    const { poem } = this.props
    return (
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <p>
          <strong>- By {poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>Mark as {this.state.clicked ? "unread" : "read"}</button>
      </div>
    );
  }
}

export default Poem;
