import { Outlet, RouteObject, createHashRouter, useOutlet } from 'react-router-dom';
import { Entry, getComponentName } from './games/Entry';
import { BonusPick } from './games/BonusPick';
import { LuckyCoinFlip } from './games/LuckyCoinFlip';
import { useEffect } from 'react';

function Layout() {
  const outlet = useOutlet();
  const title = getComponentName(outlet?.props?.children?.props?.children)
    ?.replace(/[A-Z]/g, s => ' ' + s)
    .trim();
  useEffect(() => {
    document.title = title || `Bonus Game`;
  }, [title]);

  return <Outlet context={{ title }} />;
}

/**
 * Note, you must add `as const` to the path attribute. Otherwise, the type checking will be broken.
 */
export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
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
    ]
  }
];

export const router = createHashRouter(routes);
