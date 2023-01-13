import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { DataSocketProvider } from './hooks/useDataSocket';
import { GameContextProvider } from './hooks/useGameContext';
import { usePreloadAssets } from './hooks/usePreloadAssets';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

function App() {
  const preload = usePreloadAssets(assetsCtx);

  if (!preload.done) {
    return null;
  }

  return (
    <DataSocketProvider>
      <GameContextProvider>
        <RouterProvider router={router} />
      </GameContextProvider>
    </DataSocketProvider>
  );
}

export default App;
