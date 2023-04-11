import { useContext } from 'react';
import { TierContext } from '../contexts/TierContext';

export function useTier() {
  return useContext(TierContext);
}
