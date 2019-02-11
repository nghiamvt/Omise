import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioOption } from 'src/components/radio-group';

export default class DonateOptions extends React.PureComponent {
  state = {
    selectedValue: undefined,
  };

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: undefined,
  };

  handleChange = e => {
    this.setState({
      selectedValue: parseInt(e.target.value, 10),
    });
  };

  handleOnSubmit = (id, onSubmit, selectedValue) => {
    if (typeof onSubmit === 'function') {
      onSubmit({
        charitiesId: id,
        amount: selectedValue,
      });
      this.setState({
        selectedValue: undefined,
      });
    }
  };

  render() {
    const { options, onSubmit, id } = this.props;
    const { selectedValue } = this.state;
    return (
      <div className="DonateOptions">
        <h4>Select the amount to donate (USD)</h4>
        <RadioGroup
          name={`donate_${id}`}
          onChange={this.handleChange}
          value={selectedValue}
        >
          {options.map(i => (
            <RadioOption key={i} value={i}>
              {i}
            </RadioOption>
          ))}
        </RadioGroup>
        <button
          type="button"
          disabled={!selectedValue}
          onClick={() => this.handleOnSubmit(id, onSubmit, selectedValue)}
        >
          Pay
        </button>
      </div>
    );
  }
}
