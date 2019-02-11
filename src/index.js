import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Home from 'src/pages/home';
import homeReducer from 'src/pages/home/widgets';
import { modalReducer, ModalManager } from 'src/components/modal';
import { configureStore } from 'src/store';

const store = configureStore({
  reducer: { donate: homeReducer, modals: modalReducer },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: undefined,
});

render(
  <Provider store={store}>
    <Home />
    <ModalManager />
  </Provider>,
  document.getElementById('root')
);
