import { Tier } from '../types/tier.type';

export const defaultTiers: Tier[] = [
  {
    id: Math.random().toString(),
    tier: 2,
    label: 'B',
    color: '#f3ee58',
  },
  {
    id: Math.random().toString(),
    tier: 0,
    label: 'S',
    color: '#f35858',
  },
  {
    id: Math.random().toString(),
    tier: 1,
    label: 'A',
    color: '#f3ab58',
  },
  {
    id: Math.random().toString(),
    tier: 3,
    label: 'C',
    color: '#6af358',
  },
  {
    id: Math.random().toString(),
    tier: 5,
    label: 'E',
    color: '#7751ec',
  },
  {
    id: Math.random().toString(),
    tier: 6,
    label: 'F',
    color: '#f061f0',
  },
  {
    id: Math.random().toString(),
    tier: 4,
    label: 'D',
    color: '#1bc2f0',
  },
];
