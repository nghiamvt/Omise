import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'src/common/styled';
import { formatter } from 'src/common/utils';
import Card from 'src/components/card';
import Loading from 'src/components/loading';

import DonateOptions from './donate-options';
import { CharityListWrapper } from './styled';

const images = require.context('../../images', true);
class CharityList extends React.Component {
  state = {
    selectedCharity: undefined,
    isLoading: undefined,
  };

  selectCharity = id => {
    this.setState({ selectedCharity: id });
  };

  handleDonate = params => {
    this.setState({ isLoading: params.charitiesId });
    this.props.onDonate(params).then(() => {
      this.setState({ selectedCharity: undefined });
      this.setState({ isLoading: undefined });
    });
  };

  renderACharity = charity => {
    const { selectedCharity, isLoading } = this.state;
    return (
      <Card
        key={charity.id}
        title={charity.name}
        cover={images(`./${charity.image}`)}
      >
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
        <Loading active={isLoading === charity.id} />
        <div className="Extra">
          <div>
            <b>{formatter.format(charity.amount)}</b> raised
          </div>
          <Button onClick={() => this.selectCharity(charity.id)}>DONATE</Button>
        </div>
      </Card>
    );
  };

  renderComponent = props => {
    if (!props.charities.length) return 'No data found';
    return props.charities.map(this.renderACharity);
  };

  render() {
    return (
      <CharityListWrapper>
        {this.renderComponent(this.props)}
      </CharityListWrapper>
    );
  }
}

CharityList.propTypes = {
  charities: PropTypes.array,
  onDonate: PropTypes.func,
};

CharityList.defaultProps = {
  charities: [],
  onDonate: undefined,
};

export default CharityList;
