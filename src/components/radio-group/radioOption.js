import React from 'react';
import PropTypes from 'prop-types';

function RadioOption(props) {
  return (
    <label htmlFor={props.value}>
      <input
        type="radio"
        id={props.value}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.children}
    </label>
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
