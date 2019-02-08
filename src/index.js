import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './redux';

const preloadedState = {
  donate: 0,
  message: '',
};
const rootReducer = function(_state, action) {
  switch (action.type) {
    case 'UPDATE_TOTAL_DONATE':
      return Object.assign({}, _state, {
        donate: _state.donate + action.amount,
      });
    case 'UPDATE_MESSAGE':
      return Object.assign({}, _state, {
        message: action.message,
      });

    default:
      return _state;
  }
};
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
