import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  apiRequestAction,
  apiSuccessAction,
  apiFailureAction,
  APICreator,
  APIGetCreator,
  APIPostCreator,
} from './callApi';

describe('callApi', () => {
  describe('callApi Actions', () => {
    test('apiRequestAction', () => {
      expect(apiRequestAction({ type: 'TODO' })).toEqual({
        type: 'TODO_REQUEST',
      });
    });

    test('apiSuccessAction with payload', () => {
      const payload = { id: 1, text: 'api test' };
      expect(apiSuccessAction({ type: 'TODO', payload })).toEqual({
        type: 'TODO_SUCCESS',
        payload,
      });
    });

    test('apiSuccessAction without payload', () => {
      expect(apiSuccessAction({ type: 'TODO' })).toEqual({
        type: 'TODO_SUCCESS',
      });
    });

    test('apiFailureAction', () => {
      const errMsg = 'Testing error msg';
      expect(apiFailureAction({ type: 'TODO', payload: errMsg })).toEqual({
        type: 'TODO_FAILURE',
        error: true,
        payload: errMsg,
      });
    });
  });

  describe('APICreator', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const type = 'ADD_TODO';
    let store;
    beforeEach(() => {
      fetchMock.reset();
      store = mockStore({});
    });

    test('calls api without type', () => {
      store.dispatch(APICreator({ url: '/failure' })).catch(e => {
        expect(e.message).toEqual('type is required');
        expect(store.getActions()).toEqual([]);
      });
    });

    test('calls api successful', () => {
      const response = { data: { id: 1 } };
      fetchMock.mock('*', response);
      const expectedAction = [
        apiRequestAction({ type }),
        apiSuccessAction({ type, payload: response.data }),
      ];
      store
        .dispatch(
          APICreator({
            type,
            url: '/success',
          })
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('calls unsuccessful', () => {
      console.error = jest.fn();
      fetchMock.mock('*', { status: 404 });
      const expectedAction = [
        apiRequestAction({ type }),
        apiFailureAction({ type, payload: 'Not Found', error: true }),
      ];
      store
        .dispatch(
          APICreator({
            type,
            url: '/failure',
          })
        )
        .catch(e => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('APIGetCreator', () => {
      const type = 'ADD_TODO';
      const response = { data: { id: 1, text: 'do exercise' } };
      fetchMock.get('*', response);
      const getPosts = APIGetCreator({ type, url: '/getTodo' });
      const expectedAction = [
        apiRequestAction({ type }),
        apiSuccessAction({ type, payload: response.data }),
      ];
      store.dispatch(getPosts(response.data)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    test('APIPostCreator', () => {
      const type = 'ADD_TODO';
      const response = { data: { id: 1, text: 'do exercise' } };
      fetchMock.post('*', response);
      const getPosts = APIPostCreator({ type, url: '/addTodo' });
      const expectedAction = [
        apiRequestAction({ type }),
        apiSuccessAction({ type, payload: response.data }),
      ];
      store.dispatch(getPosts(response.data)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
