import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  max-width: 450px;
  margin: 20px;
  border: 1px solid #e4e8eb;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(200, 200, 200, 0.5);

  &:hover {
    box-shadow: 0 13px 22px 0 rgba(200, 200, 200, 0.5);
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    margin: 0;
  }

  img {
    width: 100%;
  }
`;

class Card extends React.PureComponent {
  render() {
    const { cover, title, children } = this.props;
    return (
      <StyledCard className="Card">
        {cover && <img src={cover} alt={title} />}
        <div className="Meta">
          {title && <h3>{title}</h3>}
          {children}
        </div>
      </StyledCard>
    );
  }
}

Card.propTypes = {
  classNames: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  classNames: undefined,
  cover: undefined,
  title: undefined,
  children: undefined,
};

export default Card;
