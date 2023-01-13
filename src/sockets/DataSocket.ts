import md5 from 'md5';
import { createCMD, hexStrToBytes, stringToBytes } from '@ct/socket-emitter';
import { CommonProto } from '@/protobuf/protobuf';
import { Logger } from '@/utils/logger';
import { Protocol } from './protocol';
import { LoginResp } from './response/LoginResp';
import { ResponseData, SocketBase } from './SocketBase';

export type DataSocketRespDataMap = typeof socketRespMap;
export type DataSocketRespData = ResponseData<DataSocketRespDataMap>;

const socketRespMap = {
  [Protocol.DATA_HUB_LOGIN_R]: LoginResp,
  [Protocol.GAME_SNAPSHOT_PROTO]: CommonProto.GameSnapshot
};

type LoginParams = typeof import('../../public/host.json')['login'];

export class DataSocket extends SocketBase {
  vid: string;
  params: LoginParams;

  constructor(vid: string) {
    super({ gateHeartbeat: false });
    this.logger = Logger.create(this.constructor.name);
    this.vid = vid;
    this.setupRespMap(...Object.entries(socketRespMap));
  }

  override async autoConnect() {
    const { login }: { login: LoginParams } = await fetch('./host.json').then(res => res.json());
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

    this.params = login;
    this.port = Number(login.port);
    this.lines = [`${protocol}://${login.host}`];

    return super.autoConnect();
  }

  protected onOpen() {
    const cmd = createCMD(Protocol.DATA_HUB_LOGIN, bytes => {
      bytes.writeInt(Number(this.params.id));
      bytes.writeBytes(stringToBytes(this.vid, 4));
      bytes.writeBytes(hexStrToBytes(md5(`${this.params.id}5t#di0!${this.params.password}`)));
    });
    this.send(cmd);
  }
}
