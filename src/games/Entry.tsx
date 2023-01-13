import { router, routes } from '@/routes';
import { Layout, LayoutProps } from '@/components/Layout';

export function Entry() {
  const data = routes[0].children || [];

  return (
    <Layout
      buttons={data.reduce((buttons, r) => {
        const path = r.path;
        const loader = r.loader as any;
        return path === '/' || !path
          ? buttons
          : [...buttons, { text: loader?.()?.title || path, onClick: () => router.navigate(path) }];
      }, [] as NonNullable<LayoutProps['buttons']>)}
    />
  );
}
