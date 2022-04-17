// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var log_pb = require('./log_pb.js');

function serialize_log_LogAddArg(arg) {
  if (!(arg instanceof log_pb.LogAddArg)) {
    throw new Error('Expected argument of type log.LogAddArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_log_LogAddArg(buffer_arg) {
  return log_pb.LogAddArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_log_LogRemoveArg(arg) {
  if (!(arg instanceof log_pb.LogRemoveArg)) {
    throw new Error('Expected argument of type log.LogRemoveArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_log_LogRemoveArg(buffer_arg) {
  return log_pb.LogRemoveArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_log_LogShowArg(arg) {
  if (!(arg instanceof log_pb.LogShowArg)) {
    throw new Error('Expected argument of type log.LogShowArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_log_LogShowArg(buffer_arg) {
  return log_pb.LogShowArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_log_LogUpsertArg(arg) {
  if (!(arg instanceof log_pb.LogUpsertArg)) {
    throw new Error('Expected argument of type log.LogUpsertArg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_log_LogUpsertArg(buffer_arg) {
  return log_pb.LogUpsertArg.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_log_Void(arg) {
  if (!(arg instanceof log_pb.Void)) {
    throw new Error('Expected argument of type log.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_log_Void(buffer_arg) {
  return log_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var LogPersisterService = exports.LogPersisterService = {
  add: {
    path: '/log.LogPersister/Add',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.LogAddArg,
    responseType: log_pb.Void,
    requestSerialize: serialize_log_LogAddArg,
    requestDeserialize: deserialize_log_LogAddArg,
    responseSerialize: serialize_log_Void,
    responseDeserialize: deserialize_log_Void,
  },
  upsert: {
    path: '/log.LogPersister/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.LogUpsertArg,
    responseType: log_pb.Void,
    requestSerialize: serialize_log_LogUpsertArg,
    requestDeserialize: deserialize_log_LogUpsertArg,
    responseSerialize: serialize_log_Void,
    responseDeserialize: deserialize_log_Void,
  },
  remove: {
    path: '/log.LogPersister/Remove',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.LogRemoveArg,
    responseType: log_pb.Void,
    requestSerialize: serialize_log_LogRemoveArg,
    requestDeserialize: deserialize_log_LogRemoveArg,
    responseSerialize: serialize_log_Void,
    responseDeserialize: deserialize_log_Void,
  },
  show: {
    path: '/log.LogPersister/Show',
    requestStream: false,
    responseStream: false,
    requestType: log_pb.LogShowArg,
    responseType: log_pb.Void,
    requestSerialize: serialize_log_LogShowArg,
    requestDeserialize: deserialize_log_LogShowArg,
    responseSerialize: serialize_log_Void,
    responseDeserialize: deserialize_log_Void,
  },
};

exports.LogPersisterClient = grpc.makeGenericClientConstructor(LogPersisterService);
