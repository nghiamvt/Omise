import { createAction, createReducer } from 'src/store';

export const openModal = createAction('MODAL_OPEN');
export const closeModal = createAction('MODAL_CLOSE');

const initialState = [];
const modalReducer = createReducer(initialState, {
  [openModal]: (state, action) => {
    const { id, modalType, modalProps } = action.payload;
    return state.concat({ id, modalType, modalProps });
  },
  [closeModal]: (state, action) => {
    const { id } = action.payload;
    if (id === -1) return initialState;
    return id ? state.filter(m => m.id !== id) : state.slice(0, -1);
  },
});
export default modalReducer;
