import { SocketEmitter, Event, ResponseBase, ProtoMessage } from '@ct/socket-emitter';
import { Constructable } from '@/types';
import { Logger } from '@/utils/logger';
import { ProtoResp, ProtoRespBase } from './ProtoResp';

// TODO:
const Protocol = {} as Record<string, any>;

export type ResponseModel = Constructable<ResponseBase> | ProtoMessage<any> | Constructable<ProtoRespBase<any>>;
export type ParseResponseBase<R extends ResponseModel> = R extends Constructable<ResponseBase>
  ? R extends Constructable<ProtoRespBase<infer P>>
    ? InstanceType<R> & { payload: NonNullable<P> }
    : InstanceType<R>
  : R extends Constructable<any>
  ? ProtoRespBase<InstanceType<R>>
  : never;

export type ResponseDataMap<M extends Record<string, ResponseModel>> = {
  [K in keyof M]: ParseResponseBase<M[K]> & { respId: K };
};
export type ResponseData<M extends Record<string, ResponseModel>> = ResponseDataMap<M>[keyof M];

declare global {
  interface SocketEmitterMap {}
}

const isResponseBase = (payload: any): payload is Constructable<ResponseBase> => {
  return Object.prototype.isPrototypeOf.call(ResponseBase, payload);
};

const isProtoResponseBase = (payload: any): payload is Constructable<ProtoRespBase> => {
  return Object.prototype.isPrototypeOf.call(ProtoRespBase, payload);
};

export abstract class SocketBase extends SocketEmitter {
  static SOCKET_DIE = `SOCKET_DIE`;

  static toHexString(respId: PropertyKey) {
    return `0x${respId.toString(16)}`;
  }

  protected logger: Logger;

  protected retry = 5;
  private retryRef = 0;

  constructor() {
    super();
    this.on(Event.OPEN, this.onOpen, this);
    this.on(Event.OPEN, this.onConnected, this);
    this.on(Event.PACKET, this.onData, this);
    this.on(Event.ERROR, this.onError, this);
    this.on(Event.CLOSE, this.onError, this);
    this.retryRef = this.retry;
  }

  protected abstract onOpen(): void;

  private onConnected() {
    // reset retry time
    this.retry = this.retryRef;
  }

  protected onData(respData: any) {
    const hexCode = SocketBase.toHexString(respData.respId);
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

  protected onError() {
    if (this.retry <= 0) {
      this.emit(SocketBase.SOCKET_DIE);
      this.onDie();
    }
    this.retry -= 1;
  }

  protected onClose() {
    //
  }

  protected onDie() {
    if (this.retry <= 0) {
      this.emit(SocketBase.SOCKET_DIE);
      this.kill();
    }
    this.retry -= 1;
  }

  override setupRespMap(...entries: [number | string, ResponseModel][]) {
    for (const [_protocol, respClass] of entries) {
      const response = isResponseBase(respClass)
        ? respClass
        : isProtoResponseBase(respClass)
        ? respClass
        : ProtoResp(respClass);
      const protocol = Number(_protocol);
      super.setupRespMap([protocol, response]);
    }
  }

  destroy() {
    this.removeAllListeners();
    this.isOpen && this.kill();
  }
}
