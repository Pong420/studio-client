import { ByteArray, ResponseBase, ProtoMessage } from '@ct/socket-emitter';

export interface IProtoResp<T> extends ResponseBase {
  retCode?: number;
  payload: T;
  vid?: string;
}

export class ProtoRespBase<T = any> extends ResponseBase {
  override respId: number;
  payload: T;

  constructor(respId: number, bytes: ByteArray) {
    super(respId, bytes);
    this.respId = respId;
  }
}

export function ProtoResp<T>(msg: ProtoMessage<T>) {
  class ProtoResp extends ProtoRespBase<T> implements IProtoResp<T> {
    override payload: T;

    protected override parseResp(bytes: ByteArray): void {
      this.payload = msg.decode(bytes.bytes.slice(bytes.position));
    }
  }
  return ProtoResp;
}
