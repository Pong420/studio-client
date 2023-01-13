import md5 from 'md5';
import { createCMD, hexStrToBytes, stringToBytes, Event } from '@ct/socket-emitter';
import { CommonProto } from '@/protobuf/protobuf';
import { SocketEmitter } from './SocketEmitter';
import { Protocol } from './protocol';
import { LoginResp } from './response/LoginResp';
import { ProtoResp } from './response/ProtoResp';
import { Logger } from '@/utils/logger';

type LoginParams = typeof import('../../public/host.json')['login'];

export const toHexString = (respId: PropertyKey) => {
  return `0x${respId.toString(16)}`;
};

export class DataSocket extends SocketEmitter {
  vid: string;
  params: LoginParams;
  logger: Logger;

  constructor(vid: string) {
    super({ gateHeartbeat: false });
    this.logger = Logger.create(this.constructor.name);
    this.vid = vid;
    this.setupRespMap(
      [Protocol.DATA_HUB_LOGIN_R, LoginResp],
      [Protocol.GAME_SNAPSHOT_PROTO, ProtoResp(CommonProto.GameSnapshot)]
    );
    this.addListener(Event.OPEN, this.onOpen);
    this.addListener(Event.PACKET, this.onData);
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

  protected onData(respData: any) {
    const hexCode = toHexString(respData.respId);
    let name = Protocol[respData.respId] || '';
    name = name && ` (${name})`;

    if (respData.respId === 0x1 || respData.respId === 0x860002) {
      return;
    }

    this.logger.groupCollapsed(`Received ${hexCode}${name}`);
    this.logger.log(`Num of Listener: ${this.listenerCount(hexCode)}`);
    this.logger.log(respData);
    this.logger.groupEnd();
    this.emit(hexCode, respData);
  }

  destroy() {
    this.removeAllListeners();
    this.disconnect();
    this.kill();
  }
}
