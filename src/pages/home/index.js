import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from 'src/components/card';
import defaultImg from 'src/images/default-image.jpg';
import { formatNumber } from 'src/common/utils';
import { initHomeData } from './widgets';

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
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const DonateBtn = styled.button`
  color: #1b50ea;
  border: 1px solid #1b50ea;
  border-radius: 5px;
  border-radius: 2px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

class Home extends React.Component {
  static propTypes = {
    initHomeData: PropTypes.func.isRequired,
    allDonation: PropTypes.number.isRequired,
    charities: PropTypes.array
  };

  static defaultProps = {
    charities: []
  };

  componentDidMount() {
    this.props.initHomeData();
  }

  renderCharities = props => {
    // TODO: handle Loading, No data
    console.log('props.charities', props.charities);
    return props.charities.map(item => {
      return (
        <Card key={item.id} cover={<img src={defaultImg} alt={item.image} />}>
          <MetaInfo>
            <h3>{item.name}</h3>
            <DonateBtn type="button">Donate</DonateBtn>
          </MetaInfo>
        </Card>
      );
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Omise Tamboon React</Title>
        <p>All donations: {formatNumber(this.props.allDonation)}</p>
        <CharityList>{this.renderCharities(this.props)}</CharityList>
      </Wrapper>
    );
  }
}

export default connect(
  state => ({
    charities: state.charities,
    allDonation: state.allDonation
  }),
  { initHomeData }
)(Home);
