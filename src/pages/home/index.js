import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { formatNumber } from 'src/common/utils';
import Loading from 'src/components/loading';

import {
  initHomeData,
  handleSubmitDonate,
  homeLoadingSelector,
} from './widgets';
import { HomeWrapper, Title } from './styled';
import CharityList from './charity-list';

class Home extends React.Component {
  componentDidMount() {
    this.props.initHomeData();
  }

  handleDonate = ({ charitiesId, charitiesName, amount }) => {
    const { handleSubmitDonate } = this.props;
    return handleSubmitDonate({ charitiesId, charitiesName, amount });
  };

  render() {
    const { isLoading, allDonation, charities } = this.props;
    return (
      <HomeWrapper>
        <Loading active={isLoading} />
        <Title>Omise Tamboon React</Title>
        <p>All donations: {formatNumber(allDonation)} USD</p>
        <CharityList charities={charities} onDonate={this.handleDonate} />
      </HomeWrapper>
    );
  }
}

Home.propTypes = {
  initHomeData: PropTypes.func.isRequired,
  allDonation: PropTypes.number.isRequired,
  charities: PropTypes.array,
};

Home.defaultProps = {
  charities: [],
};

export default connect(
  state => ({
    charities: state.donate.charities,
    allDonation: state.donate.allDonation,
    isLoading: homeLoadingSelector(state),
  }),
  { initHomeData, handleSubmitDonate }
)(Home);
