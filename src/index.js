import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import homeReducer from 'src/pages/home/widgets';
import { modalReducer } from 'src/components/modal';
import { configureStore } from 'src/store';
import { loadingReducer } from 'src/common/api';

import App from './App';

const store = configureStore({
  reducer: {
    donate: homeReducer,
    modals: modalReducer,
    loading: loadingReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: undefined,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
