import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/routes';

const getComponentName = (element: ReactNode | null) => {
  if (element && typeof element === 'object' && 'type' in element) {
    if (element['type'] instanceof Function) {
      return element['type']['name'];
    }
  }
};

export function Entry() {
  return (
    <ul>
      {routes.map(r =>
        r.path === '/' ? null : (
          <li key={r.path}>
            <Link to={r.path || '/'}>{getComponentName(r.element) || r.path}</Link>
          </li>
        )
      )}
    </ul>
  );
}
