import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { buttonColors } from '../theme/Colors';

const Button = ({ disabled, onClick, className, typeOf, children }) => {
  let style = {};

  Object.keys(buttonColors).forEach(function(key) {
    if (key === typeOf) style = buttonColors[key];
  });

  return (
    <BaseButton
      disabled={disabled}
      onClick={onClick}
      className={className}
      typeOf={typeOf}
      style={style}
      type="button"
    >
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  typeOf: PropTypes.oneOf([
    'primary',
    'secondary',
    'succes',
    'disabled',
    'outline',
  ]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onClick: PropTypes.func,
};

export default Button;

const BaseButton = styled.button(({ style, disabled, typeOf }) => ({
  border: typeof typeOf !== 'undefined' ? 'none' : style.border,
  width: '198px',
  height: '48px',
  backgroundColor: style.background,
  cursor: disabled ? 'not-allowed' : 'pointer',
  color: style.color,
  margin: '8px 16px',
  fontSize: '14px',
  fontWeight: 'bold',
  fontFamily: 'Manrope, sans-serif',
}));
