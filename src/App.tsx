import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { Layout } from './components/Layout';

import { TierProvider } from './contexts/TierContext';
import './styles/global.css';

export const App: React.FC = () => {

  return (
    <TierProvider>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </TierProvider>
  );
};
