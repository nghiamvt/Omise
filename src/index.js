import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import Home from 'src/pages/home';
import reducer from 'src/pages/home/widgets';
import { configureStore } from 'src/store';

const preloadedState = {
  allDonation: 0,
  message: '',
  charities: []
};

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
});

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
