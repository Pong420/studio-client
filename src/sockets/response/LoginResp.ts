import { ByteArray, ResponseBase } from '@ct/socket-emitter';

export class LoginResp extends ResponseBase {
  code: number;

  protected override parseResp(bytes: ByteArray) {
    this.code = bytes.readInt();
  }
}
