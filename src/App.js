import React from 'react';
import ToDos from './components/ToDos';

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

  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }  
}

export default App;
