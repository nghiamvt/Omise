import createAction from './createAction';

describe('createAction', () => {
  it('should create an action', () => {
    const actionCreator = createAction('TEST_TYPE');
    expect(actionCreator('test_payload')).toEqual({
      type: 'TEST_TYPE',
      payload: 'test_payload',
    });
  });

  describe('when stringifying action', () => {
    it('should return the action type', () => {
      const actionCreator = createAction('TEST_TYPE');
      expect(`${actionCreator}`).toEqual('TEST_TYPE');
    });
  });
});
