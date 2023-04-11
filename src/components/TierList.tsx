import { useMemo, useState } from 'react';
import Tier, { TierProps } from './Tier';

export const TierList: React.FC = () => {

  const [tiers] = useState<TierProps[]>([
    {
      tier: 2,
      label: 'B',
      color: '#f3ee58',
      content: [],
    },
    {
      tier: 0,
      label: 'S',
      color: '#f35858',
      content: ['Felipe', 'Dowglas'],
    },
    {
      tier: 1,
      label: 'A',
      color: '#f3ab58',
      content: [],
    },
    {
      tier: 3,
      label: 'C',
      color: '#6af358',
      content: [],
    },
    {
      tier: 5,
      label: 'E',
      color: '#7751ec',
      content: [],
    },
    {
      tier: 6,
      label: 'F',
      color: '#f061f0',
      content: [],
    },
    {
      tier: 4,
      label: 'D',
      color: '#1bc2f0',
      content: [],
    },
  ]);

  const tiersSorted = useMemo(() => tiers.sort((next, current) => next.tier - current.tier), [tiers]);

  return (
    <main className='w-10/12 max-w-7xl m-auto py-12 flex flex-col gap-2'>
      {tiersSorted.map(({ tier, label, content, color }) => (
        <Tier
          key={tier}
          tier={tier}
          label={label}
          content={content}
          color={color}
        />
      ))}
    </main>
  );
};
