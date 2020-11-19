import React from 'react'

class createForm extends React.Component {
    state = {
        name: "",
        breed: "",
        img: ""
    };

    changeHandler = (e) => {
        console.log("changing", e.target.value);
        // listen for a change
        // find the key in state that should be changed 
        // rerender our component
        this.setState({ [e.target.name]: e.target.value });
    };

    localSubmitHandler = (e) => {
        e.preventDefault();

        this.props.submitHandler(this.state);

        this.setState({
            name: "",
            breed: "",
            img: ""
        });
    };
    // thunk

    render() {
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" placeholder="breed" name="breed" value={this.state.breed} onChange={this.changeHandler} />
                <input type="text" placeholder="image" name="img" value={this.state.img} onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        )
    }
};

export default createForm;