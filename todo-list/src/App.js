import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Terminar este proyecto'},
      {id: 2, content: 'Dormir'}
    ]
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Form addTodo={ this.addTodo }/>
          <ToDoList todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        </main>
      </div>
    );
  }
}

export default App;
