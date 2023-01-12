import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { DataSocketProvider } from './hooks/useDataSocket';

function App() {
  return (
    <DataSocketProvider>
      <RouterProvider router={router} />;
    </DataSocketProvider>
  );
}

export default App;
