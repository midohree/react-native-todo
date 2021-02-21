import { combineReducers } from 'redux';

import todoReducer from './features/todo.reducer';

const rootReducer = combineReducers({
  todoList: todoReducer,
});

export default rootReducer;
