import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { DataSocketProvider } from './hooks/useDataSocket';
import { usePreloadAssets } from './hooks/usePreloadAssets';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

function App() {
  const preload = usePreloadAssets(assetsCtx);

  if (!preload.done) {
    return null;
  }

  return (
    <DataSocketProvider>
      <RouterProvider router={router} />
    </DataSocketProvider>
  );
}

export default App;
