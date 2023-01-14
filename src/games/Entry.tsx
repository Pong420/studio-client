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
          const handle = r.handle;
          return path === '/' || !path
            ? actions
            : [
                ...actions,
                { text: handle?.title || path, onClick: () => router.navigate(path.replace(/(\/\*|:.*)$/, '')) }
              ];
        }, [] as LayoutAction[])
      }}
    />
  );
}
