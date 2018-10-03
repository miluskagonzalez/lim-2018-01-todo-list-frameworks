import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <header>
    <AppBar position="static" color='inherit'>
    <Toolbar variant='regular'>
      <Typography variant="title" color='primary'>
        To-Do List
      </Typography>
    </Toolbar>
  </AppBar>
  </header>
);

export default Header