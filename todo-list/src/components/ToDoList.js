import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Checkbox, Divider, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons/'

const ToDoList = ({ todos, deleteTodo, checkTodo }) => (
  todos.length
    ? (
      <List>
      {
        todos.map(({ id, content, checked }) => (
          <Fragment key={id}>
            <ListItem>
              <ListItemText className={(checked ? 'crossed' : 'uncrossed')}>{content}</ListItemText>
              <Checkbox onClick={() => checkTodo(id)} color='primary' />
              <IconButton onClick={() => deleteTodo(id)} color='secondary'>
                <Delete />
              </IconButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))
      }
      </List>
    )
    : (
      <Typography variant='button' color='primary' align='center' paragraph>No hay tareas</Typography>
    )

);

export default ToDoList