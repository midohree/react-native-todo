import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [];

const reducers = {
  addTodo: (state, { payload: newTodo }) => {
    state.push(newTodo);
  },
  toggleTodo: (state, { payload: id }) => {
    return state.map(todo => 
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  },
  deleteTodo: (state, { payload: id }) => {
    return state.filter(todo => !(todo.id === id));
  },
  deleteAllTodo: () => {
    return initialState;
  },
  markFavorite: (state, { payload: id }) => {
    return state.map(todo => 
      todo.id === id ? {...todo, isFavorite: !todo.isFavorite } : todo
    );
  },
  addDescription: (state, { payload }) => {
    const id = payload.id;
    const description = payload.description;

    return state.map(todo => 
      todo.id === id ? { ...todo, description: description } : todo
    );
  },
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers,
});

const selectAllState = createSelector(
  state => state,
  (todoList) => {
    return todoList;
  }
);

export const TODOS = todoSlice.name;
export const todoSelector = { all: state => selectAllState(state[TODOS]) };
export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;
