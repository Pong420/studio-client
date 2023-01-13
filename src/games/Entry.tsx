import { router, routes } from '@/routes';
import { Layout, LayoutAction } from '@/components/Layout';

export function Entry() {
  const data = routes[0].children || [];

  return (
    <Layout
      actions={{
        title: ' ',
        options: data.reduce((actions, r) => {
          const path = r.path;
          const loader = r.loader as any;
          return path === '/' || !path
            ? actions
            : [
                ...actions,
                { text: loader?.()?.title || path, onClick: () => router.navigate(path.replace(/(\/\*|:.*)$/, '')) }
              ];
        }, [] as LayoutAction[])
      }}
    />
  );
}
