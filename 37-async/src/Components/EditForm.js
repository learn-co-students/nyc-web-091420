import React from 'react';

class EditForm extends React.Component {

    state = {
        name: this.props.dog.name
    };

    changeHandler = (e) => {
        e.persist();
        // this.setState({ name: e.target.value })
        // event pooling
        // we only have access to the event for a short time 
        this.setState(() => ({ name: e.target.value }));
    };

    localSubmitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.name, this.props.dog.id);
        this.props.dogCardSubmitHandler();

    };
    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.localSubmitHandler}>
                <input type="text" value={this.state.name} onChange={this.changeHandler} />
                <button>Edit</button>
            </form>
        )
    };
};

export default EditForm;