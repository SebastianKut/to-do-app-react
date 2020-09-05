import React from 'react';
//to instal Router run: npm i react-router-dom
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import ToDos from './components/ToDos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid'; - this module generates random id, to use - uuidv4() 

import './App.css';


class App extends React.Component { 
  state = {
    todos: []
  }

  //to do http request we have to use componentDidMount lifecycle function
  //and for fetching data we use axios component installed with "npm i axios"
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => this.setState({
    todos: response.data
  }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }))
  };

  //Add todo 
  addToDo = (title) => {
    //post todo to the backend then update state from the backend (becasue it only mimics the server and not actually adding data to the server each id is 201, as there is only 200 todos in the json)
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title, //thgis can be written as just "title" with ES6
      complete: false
    })
    .then(response => this.setState({
        todos: [...this.state.todos, response.data]
        }))
  }

  render() {
    return (
      //to use Router we have to wrap everything in it
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* if there is more than one component we have to use render prop 
            Also adding exact to path will ensure that it will only be shown in that path*/}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <ToDos todos={this.state.todos} toggleComplete={this.toggleComplete} 
                deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} /> 
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;
