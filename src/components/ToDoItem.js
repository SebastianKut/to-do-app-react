import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'lightyellow',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };
//using arrow functions insted of traditional ones allows not to use function.bind(this)

    render() {

        //using destructuring we pull out id and title from this.props.todo to pass in return() JSX
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
        {/* because of structuring we dnt have to write <p>{this.props.todo.title} */}
                <p>{title}</p>
            </div>
        )
    }
}

// PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default ToDoItem
