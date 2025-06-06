import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`${styles.button}${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </button>
);

export default Button;