import { ReactNode } from 'react';
import { router, routes } from '@/routes';
import { Layout, LayoutProps } from '@/components/Layout';

export const getComponentName = (element: ReactNode | null) => {
  if (element && typeof element === 'object' && 'type' in element) {
    if (element['type'] instanceof Function) {
      return element['type']['name'];
    }
  }
};

export function Entry() {
  return (
    <Layout
      buttons={routes[0].children?.reduce((buttons, r) => {
        const path = r.path;
        return path === '/' || !path
          ? buttons
          : [...buttons, { text: getComponentName(r.element) || path, onClick: () => router.navigate(path) }];
      }, [] as NonNullable<LayoutProps['buttons']>)}
    />
  );
}
