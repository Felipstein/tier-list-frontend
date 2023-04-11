import { ReactNode, createContext, useCallback, useState } from 'react';
import { defaultTiers } from '../mocks/tiers.mocks';
import { Tier } from '../types/tier.type';

export interface TierContextProps {
  tiers: Tier[];
  addTier: (tier: Tier) => void;
  removeTier: (id: string) => void;
}

// @ts-ignore
export const TierContext = createContext<TierContextProps>();

interface TierProviderProps {
  children: ReactNode;
}

export const TierProvider: React.FC<TierProviderProps> = ({ children }) => {
  const [tiers, setTiers] = useState<Tier[]>(defaultTiers);

  const addTier = useCallback(({ id, tier, label, color }: Tier) => {
    setTiers(prevState => [...prevState, { id, tier, label, color }]);
  }, []);

  const removeTier = useCallback((id: string) => {
    setTiers(prevState => prevState.filter(tier => tier.id !== id));
  }, []);

  return (
    <TierContext.Provider value={{ tiers, addTier, removeTier }}>
      {children}
    </TierContext.Provider>
  );
};
