import React from 'react';

class CreateForm extends React.Component {
    state = {
        name: "",
        breed: "",
        img: ""
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state);
        this.setState({
            name: "",
            breed: "",
            img: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.changeHandler} />
                <input type="text" placeholder="breed" name="breed" value={this.state.breed} onChange={this.changeHandler} />
                <input type="text" placeholder="img" name="img" value={this.state.img} onChange={this.changeHandler} />
                <button>Submit</button>
            </form>
        );
    };
};

export default CreateForm;