import { Tier } from './Tier';

export const TierList: React.FC = () => {

  return (
    <main className='w-10/12 max-w-7xl m-auto py-12 flex flex-col gap-2'>
      <Tier
        tier={0}
        label='S'
        color='#f35858'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='A'
        color='#f3ab58'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='B'
        color='#f3ee58'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='C'
        color='#6af358'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='D'
        color='#1bc2f0'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='E'
        color='#7751ec'
      >
          Hmm
      </Tier>

      <Tier
        tier={0}
        label='F'
        color='#f061f0'
      >
          Hmm
      </Tier>
    </main>
  );
};
