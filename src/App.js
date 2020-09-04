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
        completed: true
      },
      {
        id: 3,
        title: 'Apply for jobs',
        completed: false
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <ToDos todos={this.state.todos}/>
      </div>
    );
  }  
}

export default App;
