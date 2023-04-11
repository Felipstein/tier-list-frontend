import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      {children}
    </div>
  );
};
