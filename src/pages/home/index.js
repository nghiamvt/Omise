import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'src/components/card';
import { formatNumber } from 'src/common/utils';
import { Button } from 'src/common/styled';
import DonateOptions from './donate-options';
import { initHomeData, handleSubmitFlow } from './widgets';
import { Wrapper, Title, CharityList } from './styled';

const images = require.context('../../images', true);
class Home extends React.Component {
  state = {
    selectedCharity: undefined,
  };

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

  handleDonate = ({ charitiesId, charitiesName, amount }) => {
    this.props
      .handleSubmitFlow({ charitiesId, charitiesName, amount })
      .then(() => {
        this.setState({ selectedCharity: undefined });
      });
  };

  selectCharity = id => {
    this.setState({ selectedCharity: id });
  };

  renderCard = charity => {
    const { selectedCharity } = this.state;
    return (
      <Card
        key={charity.id}
        title={charity.name}
        cover={images(`./${charity.image}`)}
      >
        <Button onClick={() => this.selectCharity(charity.id)}>DONATE</Button>
        {selectedCharity === charity.id && (
          <DonateOptions
            id={charity.id}
            onClose={() => this.selectCharity(undefined)}
            onSubmit={params =>
              this.handleDonate({ ...params, charitiesName: charity.name })
            }
            options={[10, 20, 50, 100, 500]}
          />
        )}
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
        <p>All donations: {formatNumber(this.props.allDonation)} USD</p>
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
