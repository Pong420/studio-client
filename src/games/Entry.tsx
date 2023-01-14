import { useEffect } from 'react';
import { router, routes } from '@/routes';
import { LayoutAction, useLayoutContext } from '@/components/Layout';

export function Entry() {
  const { setActions } = useLayoutContext();

  useEffect(() => {
    const data = routes[0].children || [];
    setActions({
      title: ' ',
      options: data.reduce((actions, r) => {
        const path = r.path;
        const handle = r.handle;
        return path === '/' || !path
          ? actions
          : [
              ...actions,
              { text: handle?.title || path, onClick: () => router.navigate(path.replace(/(\/\*|:.*)$/, '')) }
            ];
      }, [] as LayoutAction[])
    });
  }, [setActions]);

  return null;
}
