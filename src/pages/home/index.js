import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { formatter } from 'src/common/utils';
import Loading from 'src/components/loading';
import CharityList from './charity-list';
import { StyledHome } from './styled';
import {
  charitiesSelector,
  handleSubmitDonate,
  homeLoadingSelector,
  initHomeData,
} from './widgets';

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
    if (isLoading) return <Loading position="fixed" />;
    return (
      <StyledHome>
        <h1>Omise Tamboon React</h1>
        <p>All donations: {formatter.format(allDonation)}</p>
        <CharityList charities={charities} onDonate={this.handleDonate} />
      </StyledHome>
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
    allDonation: state.donate.allDonation,
    amountById: state.donate.sumAmountByCharity,
    charities: charitiesSelector(state),
    isLoading: homeLoadingSelector(state),
  }),
  { initHomeData, handleSubmitDonate }
)(Home);
