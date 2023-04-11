import { useMemo } from 'react';
import { useTier } from '../hooks/useTier';
import TierItem from './TierItem';

export const TierList: React.FC = () => {
  const { tiers } = useTier();

  const tiersSorted = useMemo(() => tiers.sort((next, current) => next.tier - current.tier), [tiers]);

  return (
    <main className='py-12 flex flex-col gap-2'>
      {tiersSorted.map(({ id, tier, label, color }) => (
        <TierItem
          key={id}
          data={{
            id,
            tier,
            label,
            color,
          }}
          content={[]}
        />
      ))}
    </main>
  );
};
