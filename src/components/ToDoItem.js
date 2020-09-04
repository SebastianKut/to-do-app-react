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
    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.markComplete} />
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

// PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default ToDoItem
