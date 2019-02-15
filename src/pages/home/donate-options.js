import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, RadioOption } from 'src/components/radio-group';
import { CloseBtn } from 'src/common/styled';
import { StyledDonateOptions, FlatButton } from './styled';

export default class DonateOptions extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      selectedValue: undefined,
    };
  }

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    options: PropTypes.array.isRequired,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    onClose: undefined,
  };

  handleChange = e => {
    this.setState({
      selectedValue: parseInt(e.target.value, 10),
    });
  };

  handleOnSubmit = (id, onSubmit, selectedValue) => {
    onSubmit({
      charitiesId: id,
      amount: selectedValue,
    });
    this.setState({
      selectedValue: undefined,
    });
  };

  render() {
    const { options, onSubmit, id, onClose } = this.props;
    const { selectedValue } = this.state;
    return (
      <StyledDonateOptions>
        <CloseBtn onClick={onClose} className="XClose" />
        <h4>Select the amount to donate (USD)</h4>
        <RadioGroup
          name={`donate_${id}`}
          onChange={this.handleChange}
          value={selectedValue}
        >
          {options.map(i => (
            <RadioOption key={i} value={i}>
              <span>{i}</span>
            </RadioOption>
          ))}
        </RadioGroup>
        <FlatButton
          className="FlatBtn"
          disabled={!selectedValue}
          onClick={() => this.handleOnSubmit(id, onSubmit, selectedValue)}
        >
          DONATE THIS EVENT
        </FlatButton>
      </StyledDonateOptions>
    );
  }
}
