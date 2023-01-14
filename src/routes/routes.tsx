import { RouteObject, createHashRouter } from 'react-router-dom';
import { Entry } from '@/games/Entry';
import { BonusPick } from '@/games/BonusPick';
import { LuckyCoinFlip } from '@/games/LuckyCoinFlip';
import { Layout } from '@/components/Layout';

export type IRoutes = typeof routes[number];

/**
 * Note, you must add `as const` to the path attribute. Otherwise, the type checking will be broken.
 */
export const routes = [
  {
    element: <Layout background />,
    children: [
      {
        path: '/' as const,
        handle: { title: 'Home' },
        element: <Entry />
      },
      {
        path: '/bonus-pick' as const,
        handle: { title: 'Bonus Pick' },
        element: <BonusPick />
      },
      {
        path: '/lucky-coin-flip/:step?' as const,
        handle: { title: 'Luck Coin Flip' },
        element: <LuckyCoinFlip />
      }
    ]
  }
] satisfies RouteObject[];

export const router = createHashRouter(routes);
