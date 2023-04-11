import { memo } from 'react';
import { formalStringList } from '../utils/string.utils';
import { TierSquad } from './TierSquad';

export interface TierProps {
  tier: number;
  label: string;
  color: string;
  content: string[];
}

const Tier: React.FC<TierProps> = ({ tier, label, color, content }) => {

  return (
    <div
      className='flex gap-4 bg-zinc-800 rounded shadow-md p-2 items-center transition-transform hover:scale-105'
    >
      <TierSquad
        label={label}
        color={color}
      />

      <div className='flex-1'>
        {formalStringList(content)}
      </div>
    </div>
  );
};

export default memo(Tier);
