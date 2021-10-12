/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greet_pb from './greet_pb';


export class GreetServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGreet = new grpcWeb.AbstractClientBase.MethodInfo(
    greet_pb.GreetResponse,
    (request: greet_pb.GreetRequest) => {
      return request.serializeBinary();
    },
    greet_pb.GreetResponse.deserializeBinary
  );

  greet(
    request: greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null): Promise<greet_pb.GreetResponse>;

  greet(
    request: greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: greet_pb.GreetResponse) => void): grpcWeb.ClientReadableStream<greet_pb.GreetResponse>;

  greet(
    request: greet_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: greet_pb.GreetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greet.GreetService/Greet',
        request,
        metadata || {},
        this.methodInfoGreet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greet.GreetService/Greet',
    request,
    metadata || {},
    this.methodInfoGreet);
  }

}

