import { ResponseData, ResponseDataMap, ResponseModel, SocketBase } from './SocketBase';

export type DataServerRespDataMap = typeof socketRespMap;
export type DataServerRespData = ResponseData<DataServerRespDataMap>;

declare global {
  interface SocketEmitterMap {
    dataServer: [DataServer, ResponseDataMap<DataServerRespDataMap>];
  }
}

// TODO:
const socketRespMap = {} as Record<string, ResponseModel>;

export class DataServer extends SocketBase {
  loggedIn = false;

  constructor() {
    super();
    this.setupRespMap(...Object.entries(socketRespMap));
  }

  override autoConnect(): Promise<void> {
    // const [protocol, hosts] =
    //   window.location.protocol === 'http:'
    //     ? ['ws', this.urlParam.get('ips', [])]
    //     : ['wss', this.urlParam.get('ipdomains', [])];

    return super.autoConnect();
  }

  protected onOpen() {
    // TODO:
  }
}
