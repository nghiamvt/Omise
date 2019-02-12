import React from 'react';
import PropTypes from 'prop-types';
import RadioOption from './radio-option';

function RadioGroup(props) {
  return (
    <div className="RadioGroup">
      {React.Children.map(props.children, child => {
        if (child.type.displayName !== RadioOption.displayName) return child;
        return React.cloneElement(child, {
          checked: props.value === child.props.value,
          name: props.name,
          onChange: props.onChange,
        });
      })}
    </div>
  );
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

RadioGroup.defaultProps = {
  Component: 'div',
};

export default RadioGroup;
