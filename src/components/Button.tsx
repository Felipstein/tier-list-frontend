import { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';
import { Loader } from './Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'main' | 'outlined';
  isLoading?: boolean;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'outlined', isLoading = false, disabled = false, children, ...props }) => {

  return (
    <button
      className={clsx(
        'flex gap-2 border-2 border-transparent items-center h-12 rounded py-3 px-4 shadow-md transition-all hover:scale-105 active:scale-95',
        {
          'bg-slate-500 hover:bg-slate-600 active:bg-slate-700': variant === 'main',
          'border-slate-500 hover:bg-slate-600/[0.2] hover:border-slate-600 active:bg-slate-700/[0.4] active:border-slate-700': variant === 'outlined',
          'opacity-30 pointer-events-none': isLoading || disabled,
        },
      )}
      {...props}
    >
      {children}
      {isLoading && (
        <Loader />
      )}
    </button>
  );
};
