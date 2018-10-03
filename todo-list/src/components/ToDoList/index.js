import React from 'react';

const ToDoList = ({ todos, deleteTodo }) => (
  <div>
    {
      todos.length
        ? (
          todos.map(({ id, content }) => (
            <div key={ id }>
              <p>{ content }</p>
              <button onClick={ () => deleteTodo(id) }>Borrar</button>
            </div>
          ))
        )
        : (
          <p>No hay tareas</p>
        )
    }
  </div>
);

export default ToDoList