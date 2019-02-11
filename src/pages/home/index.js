import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'src/components/card';
import DonateOptions from 'src/components/donate-options';
import defaultImg from 'src/images/default-image.jpg';
import { formatNumber } from 'src/common/utils';
import { initHomeData, submitPayment } from './widgets';

const Wrapper = styled.div`
  text-align: center;
  color: #666d87;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const CharityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
      background-color: #fff;
      color: #1b50ea;
      border: 1px solid #1b50ea;
      border-radius: 5px;
      border-radius: 2px;
      padding: 5px 10px;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

class Home extends React.Component {
  static propTypes = {
    initHomeData: PropTypes.func.isRequired,
    allDonation: PropTypes.number.isRequired,
    charities: PropTypes.array,
  };

  static defaultProps = {
    charities: [],
  };

  componentDidMount() {
    this.props.initHomeData();
  }

  handleDonate = ({ charitiesId, amount }) => {
    this.props.submitPayment({ charitiesId, amount });
  };

  renderCard = charity => {
    // TODO: if item.image is not found, use defaultImg
    return (
      <Card key={charity.id} title={charity.name} cover={defaultImg}>
        <button type="button">Donate</button>
        <DonateOptions
          id={charity.id}
          onSubmit={this.handleDonate}
          options={[10, 20, 50, 100, 500]}
        />
      </Card>
    );
  };

  renderCharityList = props => {
    // TODO: handle Loading, No data
    return <CharityList>{props.charities.map(this.renderCard)}</CharityList>;
  };

  render() {
    return (
      <Wrapper>
        <Title>Omise Tamboon React</Title>
        <p>All donations: {formatNumber(this.props.allDonation)}</p>
        {this.renderCharityList(this.props)}
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    charities: state.charities,
    allDonation: state.allDonation,
  }),
  { initHomeData, submitPayment }
)(Home);
