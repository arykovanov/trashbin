import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, className = '', ...rest }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
