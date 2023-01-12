import md5 from 'md5';
import { createCMD, hexStrToBytes, stringToBytes } from '@ct/socket-emitter';
import { CommonProto } from '@/protobuf/protobuf';
import { ResponseData, ResponseDataMap, SocketBase } from './SocketBase';
import { LoginResp } from './LoginResp';
import { Protocol } from './protocol';

export type DataSocketRespDataMap = typeof socketRespMap;
export type DataSocketRespData = ResponseData<DataSocketRespDataMap>;

type LoginParams = typeof import('../../public/host.json')['login'];

declare global {
  interface SocketEmitterMap {
    dataServer: [DataSocket, ResponseDataMap<DataSocketRespDataMap>];
  }
}

const socketRespMap = {
  [Protocol.DATA_HUB_LOGIN_R]: LoginResp,
  [Protocol.GAME_SNAPSHOT_PROTO]: CommonProto.GameSnapshot
};

export class DataSocket extends SocketBase {
  vid: string;
  loggedIn = false;
  login: LoginParams;
  count = 0;

  constructor(vid: string) {
    super({ gateHeartbeat: false });
    this.vid = vid;
    this.setupRespMap(...Object.entries(socketRespMap));
  }

  override async autoConnect() {
    const { login }: { login: LoginParams } = await fetch('./host.json').then(res => res.json());
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

    this.login = login;
    this.port = Number(login.port);
    this.lines = [`${protocol}://${login.host}`];

    return super.autoConnect();
  }

  protected onOpen() {
    const cmd = createCMD(Protocol.DATA_HUB_LOGIN, bytes => {
      bytes.writeInt(Number(this.login.id));
      bytes.writeBytes(stringToBytes(this.vid, 4));
      bytes.writeBytes(hexStrToBytes(md5(`${this.login.id}5t#di0!${this.login.password}`)));
    });
    this.send(cmd);
  }
}
