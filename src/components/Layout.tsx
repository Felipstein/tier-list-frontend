import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className='bg-zinc-900 text-white'>
      <div className='w-10/12 max-w-5xl m-auto min-h-screen'>
        <Header />
        {children}
      </div>
    </div>
  );
};
