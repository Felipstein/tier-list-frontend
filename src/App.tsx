import { TierList } from './components/TierList';

import './styles/global.css';

export const App: React.FC = () => {

  return (
    <div className='min-h-screen bg-zinc-900 text-white'>
      <TierList />
    </div>
  );
};
