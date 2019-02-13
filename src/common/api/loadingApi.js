export const createLoadingSelector = actions => state => {
  // returns true when one of the action is still loading
  return actions.some(action => {
    const isActionLoading = state.loading[action];
    return isActionLoading || typeof isActionLoading === 'undefined';
  });
};

export const loadingReducer = (state = {}, action) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);

  if (!matches) return state;

  // type='GET_TODOS_REQUEST'
  // => ["GET_TODOS_REQUEST", "GET_TODOS", "REQUEST"]
  const [, requestName, requestState] = matches;
  return {
    ...state,
    // A request is loading only when it is in REQUEST state
    [requestName]: requestState === 'REQUEST',
  };
};
