import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isPlainObject } from 'src/common/utils';
/**
 * A wrapper of `createStore()` function
 *
 * @param options The store configuration
 * @returns A configed Redux store
 */
export default function configureStore(options) {
  const {
    // if it's a function, it will be used as root reducer
    // if it's an object, it will be passed to combineReducers()
    reducer = undefined,
    // an array of Redux middleware
    middleware = [],
    // Redux DevTools Extension
    devTools = true,
    // Initial Store
    preloadedState = undefined,
    // An optional array of Redux store enhancers
    enhancers = []
  } = options || {};

  let rootReducer;
  if (typeof reducer === 'function') {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('Reducer argument must be a function or a plain object');
  }

  const storeEnhancers = [applyMiddleware(...middleware), ...enhancers];
  const finalCompose = devTools ? composeWithDevTools({}) : compose;
  const composeEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composeEnhancer);
}
