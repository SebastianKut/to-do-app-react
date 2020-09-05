import React, { Component } from 'react'

export class AddToDo extends Component {
    //this is component level state that is different to app level state that can be controlled via Redux 
    state = {
        title: ''
    }

    //this is syntax to use with multiple input fields
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //pass addToDo method up the component tree passing title from state as parameter
        this.props.addToDo(this.state.title);
        //reset title field
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: 'flex'}}> 
                <input 
                    type="text" 
                    //name attribute has to = to state property name for onchange input handler method to work
                    name="title" 
                    placeholder="Add task" 
                    style={{flex:'10', padding: '5px'}}
                    value = {this.state.title}
                    onChange = {this.inputHandler}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}}
                />  
            </form>
        )
    }
}

export default AddToDo

