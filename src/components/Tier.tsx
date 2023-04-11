import { ReactNode } from 'react';
import { TierSquad } from './TierSquad';

interface TierProps {
  tier: number;
  label: string;
  color: string;
  children: ReactNode;
}

export const Tier: React.FC<TierProps> = ({ tier, label, color, children }) => {

  return (
    <div
      className='flex gap-4 bg-zinc-800 rounded shadow-md p-2 items-center'
    >
      <TierSquad
        label={label}
        color={color}
      />

      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
};
