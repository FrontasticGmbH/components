import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  id,
  type,
  name,
  placeholder,
  className,
  checked,
  disabled,
  required,
  hidden,
  onChange,
  value,
  min,
  max,
  step,
  ref,
  autoFocus,
}) => {
  return (
    <input
      aria-label={placeholder || name}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      checked={checked}
      disabled={disabled}
      required={required}
      hidden={hidden}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
      ref={ref}
      autoFocus={autoFocus}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  hidden: PropTypes.bool,
  value: PropTypes.any,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  ref: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  id: undefined,
  type: 'text',
  name: 'textfield',
  placeholder: undefined,
  className: '',
  checked: undefined,
  disabled: undefined,
  required: undefined,
  hidden: undefined,
  value: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  ref: undefined,
  autoFocus: false,
};

export default Input;
