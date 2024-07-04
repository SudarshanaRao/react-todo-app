// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';
import { List, ListItem, ListItemText, IconButton, Container } from '@mui/material';
import { Delete, Edit, CheckCircle, Cancel } from '@mui/icons-material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Container>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => dispatch(toggleTask(index))}>
                  {task.completed ? <Cancel /> : <CheckCircle />}
                </IconButton>
                <IconButton edge="end" onClick={() => dispatch(editTask(index, prompt('Edit task:', task.task)))}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" onClick={() => dispatch(deleteTask(index))}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={task.task} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
