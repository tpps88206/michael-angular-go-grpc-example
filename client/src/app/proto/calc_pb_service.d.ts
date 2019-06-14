// package: proto
// file: proto/calc.proto

import * as proto_calc_pb from "../proto/calc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CalculatorPlus = {
  readonly methodName: string;
  readonly service: typeof Calculator;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof proto_calc_pb.CalcRequest;
  readonly responseType: typeof proto_calc_pb.CalcReply;
};

export class Calculator {
  static readonly serviceName: string;
  static readonly Plus: CalculatorPlus;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CalculatorClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  plus(
    requestMessage: proto_calc_pb.CalcRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: proto_calc_pb.CalcReply|null) => void
  ): UnaryResponse;
  plus(
    requestMessage: proto_calc_pb.CalcRequest,
    callback: (error: ServiceError|null, responseMessage: proto_calc_pb.CalcReply|null) => void
  ): UnaryResponse;
}

