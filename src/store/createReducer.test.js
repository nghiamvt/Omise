import createReducer from './createReducer';

describe('createReducer', () => {
  const addTodo = (state, action) => {
    return [...state, { ...action.payload, completed: false }];
  };

  const toggleTodo = (state, action) => {
    const { id } = action.payload;
    return state.map(todo => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
  };

  const deleteTodo = (state, action) => {
    const { id } = action.payload;
    return state.filter(todo => todo.id !== id);
  };

  const todosReducer = createReducer([], {
    ADD_TODO: addTodo,
    TOGGLE_TODO: toggleTodo,
    DELETE_TODO: deleteTodo,
  });

  test('handle initial state', () => {
    const action = { type: '', payload: undefined };
    expect(todosReducer(undefined, action)).toEqual([]);
  });

  const firstPayload = { id: 1, text: 'first todo' };
  describe('handle ADD_TODO', () => {
    test('handle intitial ADD_TODO', () => {
      const action = { type: 'ADD_TODO', payload: firstPayload };
      expect(todosReducer(undefined, action)).toEqual([
        { ...firstPayload, completed: false },
      ]);
    });

    test('handle second ADD_TODO', () => {
      const secondPayload = { id: 2, text: 'second todo' };
      const action = { type: 'ADD_TODO', payload: secondPayload };
      expect(
        todosReducer([{ ...firstPayload, completed: false }], action)
      ).toEqual([
        { ...firstPayload, completed: false },
        { ...secondPayload, completed: false },
      ]);
    });
  });

  describe('handle TOGGLE_TODO', () => {
    const action = { type: 'TOGGLE_TODO', payload: { id: 1 } };
    expect(
      todosReducer([{ ...firstPayload, completed: false }], action)
    ).toEqual([{ ...firstPayload, completed: true }]);
  });

  describe('handle DELETE_TODO', () => {
    const action = { type: 'DELETE_TODO', payload: { id: 1 } };
    expect(
      todosReducer([{ ...firstPayload, completed: false }], action)
    ).toEqual([]);
  });
});
