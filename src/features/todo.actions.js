import types from './todo.actionTypes';

export const addTodo = newTodo => ({
  type: types.ADD_TODO,
  payload: { newTodo },
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = todoList => ({
  type: types.DELETE_TODO,
  payload: { todoList },
});

export const addDescription = (id, value) => ({
  type: types.ADD_DESC,
  payload: { id: id, description: value },
});

export const markStar = id => ({
  type: types.MARK_STAR,
  payload: { id },
});
