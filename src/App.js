// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h3" gutterBottom>
          To-Do List
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
