import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    todos: [],
    inputText: ''
  }
  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
    })
  }
  addTodo = (content) => {
    this.setState({
      todos: [...this.state.todos, { content, id: new Date().getTime(), checked: false }]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.addTodo(this.state.inputText);
    this.setState({
      inputText: ''
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  checkTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.checked === true ? todo.checked = false : todo.checked = true;
        return todo
      })
    })
  }
  deleteCheckedTodos = () => {
    this.setState({
      todos: this.state.todos.filter(({ checked }) => !checked)
    })
  }
  render() {
    return (
      <Fragment>
        <header>
          <Typography variant="display3" color='primary' align='center' gutterBottom>
            To-Do List
          </Typography>
        </header>
        <main>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            inputText={this.state.inputText}
            deleteCheckedTodos={this.deleteCheckedTodos}
            checkedTodos={this.state.todos.filter(({ checked }) => checked).length}
          />
          <ToDoList
            todos={this.state.todos}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
