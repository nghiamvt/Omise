/**
 * Create an action creator and declare an action type constant
 *
 * @param type The action type
 */
export default function createAction(type) {
  function actionCreator(payload) {
    return { type, payload };
  }

  actionCreator.toString = () => `${type}`;

  return actionCreator;
}
