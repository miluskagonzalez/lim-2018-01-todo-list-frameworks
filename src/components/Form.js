import React from 'react';
import { TextField, IconButton, Grid } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'

const Form = ({ handleChange, handleSubmit, inputText, deleteCheckedTodos, checkedTodos }) => (
  <form onSubmit={handleSubmit}>
    <Grid container justify="center" alignItems='flex-end'>
      <TextField
        id='todo'
        label='Agrega una tarea'
        value={inputText}
        onChange={handleChange}
        margin='normal'
      />
      <IconButton
        color='primary'
        type='submit'
        aria-label='Add'
        disabled={inputText.trim() ? false : true}>
        <Add />
      </IconButton>
      <IconButton
        color='secondary'
        aria-label='Add'
        onClick={deleteCheckedTodos}
        disabled={checkedTodos ? false : true}>
        <Delete />
      </IconButton>
    </Grid>
  </form>
)

export default Form