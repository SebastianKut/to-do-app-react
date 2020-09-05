import React from 'react';
import Header from './components/layout/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';


class App extends React.Component { 
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Call Sally',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Apply for jobs',
        completed: false
      }
    ]
  }
  //Toggle complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  };

  //Delete todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  };

  //Add todo
  addToDo = (title) => {
    const newTodo = {
      //generate id using uuid package that can be installe with command "npm i uuid"
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }  
}

export default App;
