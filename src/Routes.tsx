import { Route, Routes as Router } from 'react-router-dom';

import { Home } from './pages/Home';

export const Routes: React.FC = () => {

  return (
    <Router>
      <Route path='/' element={<Home />} />
    </Router>
  );
};
