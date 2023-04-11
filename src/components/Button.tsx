import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {

  return (
    <button
      {...props}
    >
      {children}
    </button>
  );
};
