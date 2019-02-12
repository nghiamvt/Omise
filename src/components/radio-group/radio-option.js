import React from 'react';
import PropTypes from 'prop-types';

function RadioOption(props) {
  const id = `${props.name}_${props.value}`;
  return (
    <label htmlFor={id} className={RadioOption.displayName}>
      <input
        type="radio"
        id={id}
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
RadioOption.displayName = 'RadioOption';

export default RadioOption;
