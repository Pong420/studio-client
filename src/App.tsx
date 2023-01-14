import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { usePreloadAssets } from './hooks/usePreloadAssets';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

function App() {
  const preload = usePreloadAssets(assetsCtx);

  return preload.done ? <RouterProvider router={router} /> : null;
}

export default App;
