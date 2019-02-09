import 'isomorphic-fetch';
import { URL as API_URLS } from '../constant';

// See https://github.com/redux-utilities/flux-standard-action
export const apiRequestAction = ({ type }) => ({
  type: `${type}_REQUEST`,
});

export const apiSuccessAction = ({ type, payload }) => ({
  type: `${type}_SUCCESS`,
  payload,
});

export const apiFailureAction = ({ type, payload }) => ({
  type: `${type}_FAILURE`,
  payload,
  error: true,
});

/**
 * A friendly wrapper to make http request and reduce boilerplace code
 *
 * @param options The available config options for making requests
 */
export const APICreator = options => dispatch => {
  return new Promise((resolve, reject) => {
    const {
      // an action type (string)
      type,
      // http methods: POST, GET, PUT, DELETE, PATCH
      method = 'GET',
      // the body of http request
      data,
      // the url to make request
      url,
      // the root of api url
      baseUrl = API_URLS.BASE_API,
      // custom http headers
      headers = {},
    } = options;
    if (!type) return reject(new Error('type is required'));
    dispatch(apiRequestAction({ type }));
    const finalUrl = `${baseUrl}${url}`;
    return fetch(finalUrl, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(data),
    })
      .then(response => {
        // Shorthand to check for an HTTP 2xx response status.
        // See https://fetch.spec.whatwg.org/#dom-response-ok
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(({ data }) => {
        dispatch(apiSuccessAction({ type, payload: data }));
        resolve(data);
      })
      .catch(err => {
        console.error('API:', finalUrl, err.message, err.stack);
        dispatch(apiFailureAction({ type, payload: err.message, error: true }));
        reject(err.message);
      });
  });
};

export const APIGetCreator = ({ type, url }) => payload => {
  return APICreator({
    type,
    url,
    ...payload,
  });
};

export const APIPostCreator = ({ type, url, data }) => payload => {
  return APICreator({
    type,
    url,
    ...payload,
    data: Object.assign({}, data, payload.data),
    method: 'POST',
  });
};
