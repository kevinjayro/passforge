import type { ReactNode } from 'react';
import './Button.css';

type ColorVariant = 'primary' | 'secondary' | 'danger';
type Size = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  icon?: ReactNode;
  label?: string;
  colorVariant?: ColorVariant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: ButtonType;
};

export default function Button({
  icon,
  label,
  colorVariant = 'primary',
  size = 'medium',
  className,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`button button--${colorVariant} button--${size} ${className ?? ''}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
