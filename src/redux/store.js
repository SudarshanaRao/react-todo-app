// src/redux/store.js
import { createStore } from 'redux';
import taskReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
  taskReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
