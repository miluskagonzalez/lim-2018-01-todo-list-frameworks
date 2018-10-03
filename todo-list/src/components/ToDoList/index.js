import React from 'react';
import { List } from '@material-ui/core'
import { ListItem, ListItemText, Checkbox } from '@material-ui/core'


const ToDoList = ({ todos, deleteTodo }) => (
  <List>
    {
      todos.length
        ? (
          todos.map(({ id, content }) => (
            <ListItem key={id}>
              <ListItemText>{content}</ListItemText>
              <Checkbox />
              <button onClick={() => deleteTodo(id)}>Borrar</button>
            </ListItem>
          ))
        ) 
        : <p>No hay tareas!</p>
    }
  </List>
);

export default ToDoList