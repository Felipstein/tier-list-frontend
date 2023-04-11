import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { Layout } from './components/Layout';

import './styles/global.css';

export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};
