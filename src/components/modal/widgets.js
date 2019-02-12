import { createAction, createReducer } from 'src/store';

export const MODAL_TYPE = {
  NOTIFICATION: 'Notification',
};

export const openModal = createAction('MODAL_OPEN');
export const closeModal = createAction('MODAL_CLOSE');

export const showNotification = ({ id, modalProps, timeout }) => dispatch => {
  dispatch(openModal({ id, modalType: 'Notification', modalProps }));
  if (timeout) {
    setTimeout(() => {
      dispatch(closeModal({ id }));
    }, timeout);
  }
};

const initialState = [];
const modalReducer = createReducer(initialState, {
  [openModal]: (state, action) => {
    const { id, modalType, modalProps } = action.payload;
    return state.concat({ id, modalType, modalProps });
  },
  [closeModal]: (state, action) => {
    const { id } = action.payload;
    return id === -1 ? initialState : state.filter(m => m.id !== id);
  },
});
export default modalReducer;
