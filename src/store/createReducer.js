/**
 * Create an action creator and declare an action type constant
 *
 * @param initialState The initial state to be used
 * @param fnMap A mapping object to handle actions
 */
export default function createReducer(initialState, fnMap) {
  return (state = initialState, action) => {
    const handler = fnMap[action.type];

    return handler ? handler(state, action) : state;
  };
}
