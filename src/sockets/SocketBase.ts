import { Event, ResponseBase, ProtoMessage } from '@ct/socket-emitter';
import { Constructable } from '@/types';
import { Logger } from '@/utils/logger';
import { ProtoResp, ProtoRespBase } from './response/ProtoResp';
import { SocketEmitter, SocketEmitterOptions } from './SocketEmitter';
import { Protocol } from './protocol';

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

const isResponseBase = (payload: any): payload is Constructable<ResponseBase> => {
  return Object.prototype.isPrototypeOf.call(ResponseBase, payload);
};

const isProtoResponseBase = (payload: any): payload is Constructable<ProtoRespBase> => {
  return Object.prototype.isPrototypeOf.call(ProtoRespBase, payload);
};

export abstract class SocketBase extends SocketEmitter {
  static PACKET_EVENT = `typesafe_PACKET_EVENT`;

  static toHexString(respId: PropertyKey) {
    return `0x${respId.toString(16)}`;
  }

  protected logger: Logger;

  constructor(option?: SocketEmitterOptions) {
    super(option);
    this.on(Event.PACKET, this.onData, this);
    this.logger = Logger.create(this.constructor.name);
  }

  protected abstract onOpen(): void;

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
    this.emit(SocketBase.PACKET_EVENT, respData);
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

  subscribe(callback: (respData: any) => void) {
    this.addListener(SocketBase.PACKET_EVENT, callback);
    return () => {
      this.removeListener(SocketBase.PACKET_EVENT, callback);
    };
  }

  destroy() {
    this.removeAllListeners();
    this.disconnect();
    this.kill();
  }
}
