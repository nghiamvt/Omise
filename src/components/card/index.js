import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 450px;
  margin: 20px;
  border: 1px solid #e4e8eb;
  border-radius: 5px;

  img {
    width: 100%;
  }
`;

export default function Card(props) {
  return (
    <StyledCard>
      {props.cover}
      {props.title && <h3>{props.title}</h3>}
      {props.children}
    </StyledCard>
  );
}

Card.displayName = 'Card';
Card.propTypes = {
  classNames: PropTypes.string,
  cover: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node
};
Card.defaultProps = {
  classNames: undefined,
  cover: undefined,
  title: undefined,
  children: undefined
};
