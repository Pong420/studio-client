import { useMemo, useContext, createContext, createElement, useLayoutEffect, useState } from 'react';
import { DataSocket, Protocol, DataSocketRespData } from '@/sockets';
import { vid } from '@/constants';
import { CommonProto } from '@/protobuf';

export interface DataSocketContext {
  socket: DataSocket;
  authenticated: Authenticated;
  snapshot?: CommonProto.IGameSnapshot;
}

const Context = createContext<DataSocketContext | null>(null);

export enum Authenticated {
  Unknown,
  LoggedIn,
  Fail
}

export function useDataSocket() {
  const context = useContext(Context);
  if (context === null) {
    throw new Error(`${useDataSocket.name} should be used under ${DataSocketProvider.name}`);
  }
  return context;
}

export { DataSocket };

export function DataSocketProvider({ children }: React.PropsWithChildren) {
  const socket = useMemo(() => new DataSocket(vid), []);
  const [authenticated, setAuthenticated] = useState(Authenticated.Unknown);
  const [snapshot, setSnapShot] = useState<CommonProto.IGameSnapshot>();

  useLayoutEffect(() => {
    socket.autoConnect();

    function onResponse(resp: DataSocketRespData) {
      switch (resp.respId) {
        case Protocol.DATA_HUB_LOGIN_R:
          setAuthenticated(resp.code === 0 ? Authenticated.LoggedIn : Authenticated.Fail);
          break;
        case Protocol.GAME_SNAPSHOT_PROTO:
          setSnapShot(resp.payload);
          break;
      }
    }

    const unsubscribe = socket.subscribe(onResponse);

    return () => {
      unsubscribe();
      socket.destroy();
      setAuthenticated(Authenticated.Unknown);
    };
  }, [socket]);

  return createElement(Context.Provider, { value: { socket, snapshot, authenticated } }, children);
}
