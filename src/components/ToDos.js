import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends React.Component {

    render(){
        return(
            this.props.todos.map((todo) =>
                <ToDoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo}/>
            )
        )
    }
}
// PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default ToDos;