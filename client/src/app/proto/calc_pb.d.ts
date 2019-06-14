// package: proto
// file: proto/calc.proto

import * as jspb from "google-protobuf";

export class CalcRequest extends jspb.Message {
  getNumberA(): number;
  setNumberA(value: number): void;

  getNumberB(): number;
  setNumberB(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CalcRequest): CalcRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcRequest;
  static deserializeBinaryFromReader(message: CalcRequest, reader: jspb.BinaryReader): CalcRequest;
}

export namespace CalcRequest {
  export type AsObject = {
    numberA: number,
    numberB: number,
  }
}

export class CalcReply extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalcReply.AsObject;
  static toObject(includeInstance: boolean, msg: CalcReply): CalcReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalcReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalcReply;
  static deserializeBinaryFromReader(message: CalcReply, reader: jspb.BinaryReader): CalcReply;
}

export namespace CalcReply {
  export type AsObject = {
    result: number,
  }
}

