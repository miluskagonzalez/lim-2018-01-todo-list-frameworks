import React, { Component } from 'react';

class Form extends Component {
  state = {
    content: '',
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return(
    <div>
      <form onSubmit={ this.handleSubmit }>
        <label>Agrega una tarea</label>
        <input type='text' name='todo' onChange={ this.handleChange } value={ this.state.content }/>
        <button>Agregar tarea</button>
        <button type='button'>Borrar</button>
      </form>
    </div>
    )
  }
}


// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(event.target.todoinput.value);
// }

// const Form = () => (
//   <form onSubmit={ handleSubmit }>
//     <input type='text' name='todoinput' />
//     <button>Agregar tarea</button>
//     <button type='button'>Borrar</button>
//   </form>
// );

export default Form