import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'src/components/card';
import defaultImg from 'src/images/default-image.jpg';
import { formatNumber } from 'src/common/utils';
import DonateOptions from './donate-options';
import { initHomeData, handleSubmitFlow } from './widgets';
import { Wrapper, Title, CharityList } from './styled';

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
    this.props.handleSubmitFlow({ charitiesId, amount });
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
    charities: state.donate.charities,
    allDonation: state.donate.allDonation,
  }),
  { initHomeData, handleSubmitFlow }
)(Home);
