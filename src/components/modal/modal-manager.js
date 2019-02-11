import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openModal, closeModal } from './widgets';
import { NotificationModal } from './modal-types';

export const MODAL_TYPE = {
  NOTIFICATION: 'Notification',
};

const MODAL_COMPONENTS = {
  [MODAL_TYPE.NOTIFICATION]: NotificationModal,
  /* other modals */
};

function ModalManager(props) {
  if (!props.modals.length) return null;
  return props.modals
    .filter(m => m.modalType)
    .map(m => {
      const ModalCmp = MODAL_COMPONENTS[m.modalType];
      return (
        <ModalCmp
          {...m.modalProps}
          key={m.id}
          id={m.id}
          onClose={props.closeModal}
          onOpen={props.openModal}
        />
      );
    });
}

ModalManager.propTypes = {
  modals: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    modals: state.modals,
  }),
  { openModal, closeModal }
)(ModalManager);