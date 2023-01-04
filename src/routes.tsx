import { RouteObject, createHashRouter } from 'react-router-dom';
import { Entry } from './games/Entry';
import { BonusPick } from './games/BonusPick';
import { LuckyCoinFlip } from './games/LuckyCoinFlip';

/**
 * Note, you must add `as const` to the path attribute. Otherwise, the type checking will be broken.
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Entry />
  },
  {
    path: '/bonus-pick',
    element: <BonusPick />
  },
  {
    path: '/lucky-coin-clip',
    element: <LuckyCoinFlip />
  }
];

export const router = createHashRouter(routes);
