import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'src/components/card';
import DonateOptions from 'src/components/donate-options';
import defaultImg from 'src/images/default-image.jpg';
import { formatNumber } from 'src/common/utils';
import { openModal } from 'src/components/modal';
import { MODAL_TYPE } from 'src/common/constant';
import { initHomeData, submitPayment } from './widgets';
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
    console.log('MODAL_TYPE.NOTIFICATION', MODAL_TYPE.NOTIFICATION);
  }

  handleDonate = ({ charitiesId, amount }) => {
    this.props.submitPayment({ charitiesId, amount }).then(res => {
      console.log('res', res);
      this.props.openModal({
        id: charitiesId,
        modalType: MODAL_TYPE.NOTIFICATION,
        modalProps: {
          title: 'Success',
          description: 'Anyone with access can view your invited visitors.',
        },
      });
    });
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
  { initHomeData, submitPayment, openModal }
)(Home);
