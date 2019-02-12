import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  width: 50px;
  display: inline-flex;
  align-items: center;
  input {
    margin-right: 5px;
    cursor: pointer;
  }
`;

function RadioOption(props) {
  const id = `${props.name}_${props.value}`;
  return (
    <Label htmlFor={id}>
      <input
        type="radio"
        id={id}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.children}
    </Label>
  );
}

RadioOption.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  checked: PropTypes.any,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
};
RadioOption.defaultProps = {
  checked: false,
};

export default RadioOption;
