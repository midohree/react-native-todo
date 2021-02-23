import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../index';
import Todos from './Todos';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
