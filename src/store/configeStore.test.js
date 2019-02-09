import configureStore from './configeStore';
import thunk from 'redux-thunk';
import * as redux from 'redux';
import * as devtools from 'redux-devtools-extension';

describe('configureStore', () => {
  jest.spyOn(redux, 'applyMiddleware');
  jest.spyOn(redux, 'combineReducers');
  jest.spyOn(redux, 'compose');
  jest.spyOn(redux, 'createStore');
  jest.spyOn(devtools, 'composeWithDevTools');

  const reducer = (state = {}, action) => state;
  beforeEach(() => jest.clearAllMocks());

  describe('Reducer', () => {
    test('given a root reducer', () => {
      configureStore({ reducer });
      expect(configureStore({ reducer })).toBeInstanceOf(Object);
      expect(redux.applyMiddleware).toHaveBeenCalled();
      expect(devtools.composeWithDevTools).toHaveBeenCalled();
      expect(redux.createStore).toHaveBeenCalledWith(
        reducer,
        undefined,
        expect.any(Function)
      );
    });

    test('given an object of reducers', () => {
      const reducer = {
        app() {
          return { version: 1 };
        },
      };
      expect(configureStore({ reducer })).toBeInstanceOf(Object);
      expect(redux.combineReducers).toHaveBeenCalledWith(reducer);
      expect(redux.applyMiddleware).toHaveBeenCalled();
      expect(devtools.composeWithDevTools).toHaveBeenCalled();
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        undefined,
        expect.any(Function)
      );
    });

    test('given no reducer', () => {
      expect(configureStore).toThrow(
        'Reducer argument must be a function or a plain object'
      );
    });

    describe('Middleware', () => {
      test('given no middleware', () => {
        expect(configureStore({ middleware: [], reducer })).toBeInstanceOf(
          Object
        );
        expect(redux.applyMiddleware).toHaveBeenCalledWith();
        expect(devtools.composeWithDevTools).toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          undefined,
          expect.any(Function)
        );
      });

      test('given a middleware', () => {
        expect(configureStore({ middleware: [thunk], reducer })).toBeInstanceOf(
          Object
        );
        expect(redux.applyMiddleware).toHaveBeenCalledWith(thunk);
        expect(devtools.composeWithDevTools).toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          undefined,
          expect.any(Function)
        );
      });
    });

    describe('devTools', () => {
      test('with devTools enabled', () => {
        expect(configureStore({ devTools: true, reducer })).toBeInstanceOf(
          Object
        );
        expect(redux.applyMiddleware).toHaveBeenCalled();
        expect(redux.compose).not.toHaveBeenCalled();
        expect(devtools.composeWithDevTools).toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          undefined,
          expect.any(Function)
        );
      });

      test('with devTools disabled', () => {
        expect(configureStore({ devTools: false, reducer })).toBeInstanceOf(
          Object
        );
        expect(redux.applyMiddleware).toHaveBeenCalled();
        expect(redux.compose).toHaveBeenCalled();
        expect(devtools.composeWithDevTools).not.toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          undefined,
          expect.any(Function)
        );
      });
    });

    describe('preloadedState', () => {
      test('with preloadedState', () => {
        const preloadedState = { app: { version: 1 } };
        expect(configureStore({ preloadedState, reducer })).toBeInstanceOf(
          Object
        );
        expect(redux.applyMiddleware).toHaveBeenCalled();
        expect(devtools.composeWithDevTools).toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          preloadedState,
          expect.any(Function)
        );
      });
    });

    describe('enhancers', () => {
      it('with enhancers', () => {
        const enhancer = next => next;
        expect(
          configureStore({ enhancers: [enhancer], reducer })
        ).toBeInstanceOf(Object);
        expect(redux.applyMiddleware).toHaveBeenCalled();
        expect(devtools.composeWithDevTools).toHaveBeenCalled();
        expect(redux.createStore).toHaveBeenCalledWith(
          reducer,
          undefined,
          expect.any(Function)
        );
      });
    });
  });
});
