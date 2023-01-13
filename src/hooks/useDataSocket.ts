import { useMemo, useContext, createContext, createElement, useLayoutEffect } from 'react';
import { DataSocket } from '@/sockets/DataSocket';
import { vid } from '@/constants';

export interface DataSocketContext {
  socket: DataSocket;
}

const Context = createContext<DataSocketContext | null>(null);

export function useDataSocket() {
  const context = useContext(Context);
  if (context === null) {
    throw new Error(`${useDataSocket.name} should be used under ${DataSocketProvider.name}`);
  }
  return context;
}

export function DataSocketProvider({ children }: React.PropsWithChildren) {
  const socket = useMemo(() => new DataSocket(vid), []);

  useLayoutEffect(() => {
    socket.autoConnect();
    return () => {
      socket.destroy();
    };
  }, [socket]);

  return createElement(Context.Provider, { value: { socket } }, children);
}
