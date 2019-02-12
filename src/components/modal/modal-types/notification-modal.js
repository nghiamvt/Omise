import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, CloseBtn, Title, Description } from './notification-styled';

function NotificationModal(props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <CloseBtn onClick={() => props.onClose({ id: props.id })} />
    </Wrapper>
  );
}

NotificationModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationModal;
