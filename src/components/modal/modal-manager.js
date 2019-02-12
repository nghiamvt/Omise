import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { openModal, closeModal } from './widgets';
import { NotificationModal } from './modal-types';
import { MODAL_TYPE } from './widgets';

const MODAL_COMPONENTS = {
  [MODAL_TYPE.NOTIFICATION]: NotificationModal,
  /* other modals */
};

const Wrapper = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
`;

function ModalManager(props) {
  if (!props.modals.length) return null;

  return (
    <Wrapper>
      {props.modals
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
        })}
    </Wrapper>
  );
}

ModalManager.propTypes = {
  modals: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    modals: state.modals,
  }),
  { openModal, closeModal }
)(ModalManager);
