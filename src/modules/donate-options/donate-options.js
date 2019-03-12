import PropTypes from 'prop-types';
import React from 'react';
import { CloseBtn, FlatButton } from 'src/common/styled';
import { RadioGroup, RadioOption } from 'src/components/radio-group';
import styled from 'styled-components';

export default class DonateOptions extends React.PureComponent {
  state = {
    selectedValue: undefined,
  };

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

  handleOnSubmit = id => {
    const { onSubmit } = this.props;
    const { selectedValue } = this.state;

    onSubmit({
      charitiesId: id,
      amount: selectedValue,
    });
    this.setState({
      selectedValue: undefined,
    });
  };

  render() {
    const { options, id, onClose } = this.props;
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
          onClick={() => this.handleOnSubmit(id)}
        >
          DONATE THIS EVENT
        </FlatButton>
      </StyledDonateOptions>
    );
  }
}

export const StyledDonateOptions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  justify-content: space-evenly;
  padding: 20px 20px 65px;

  .RadioGroup {
    max-width: 250px;
  }

  .RadioOption {
    input {
      display: none;
    }

    input + span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 65px;
      width: 65px;
      margin: 5px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 3px;
      color: #000;
      background-color: #fff;
      box-shadow: 0 2px 7px 0 rgba(200, 200, 200, 0.5);

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
          0 2px 4px 0 rgba(0, 0, 0, 0.08);
      }
    }

    input:checked + span {
      color: #fff;
      background-color: #16b184;
    }
  }

  @media (max-width: 380px) {
    .RadioGroup {
      max-width: 150px;
    }
    .RadioOption {
      .FlatBtn {
        padding: 15px;
      }
      input + span {
        height: 40px;
        width: 40px;
      }
    }
  }
`;
