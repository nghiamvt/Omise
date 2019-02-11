import React from 'react';
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

export default class Card extends React.PureComponent {
  static propTypes = {
    classNames: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    classNames: undefined,
    cover: undefined,
    title: undefined,
    children: undefined,
  };

  render() {
    const { cover, title, children } = this.props;
    return (
      <StyledCard>
        {cover && <img src={cover} alt={title} />}
        <div className="Meta">
          {title && <h3>{title}</h3>}
          {children}
        </div>
      </StyledCard>
    );
  }
}
