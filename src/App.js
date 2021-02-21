import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TodosContainer from './container/TodosContainer';

function App() {
  return (
    <Provider store={store}>
      <TodosContainer />
    </Provider>
  );
}

export default App;
