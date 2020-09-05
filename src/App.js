import React from 'react';
import Header from './components/layout/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';

import './App.css';


class App extends React.Component { 
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Call Sally',
        completed: false
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo />
          <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }  
}

export default App;
