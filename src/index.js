import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TODOS, todoReducer } from './features/slice';

const rootReducer = combineReducers({
  [TODOS]: todoReducer,
});

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export default createStore;