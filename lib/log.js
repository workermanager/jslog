"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogPersister = void 0;
const messages = require('./log_pb');
const services = require('./log_grpc_pb');
const grpc = require('@grpc/grpc-js');
const define_1 = require("./define");
function asPbLog(args) {
    var log = new messages.LogItem();
    log.setType(args.type);
    log.setKey(args.key);
    log.setShow(args.show);
    if (args.encode == define_1.LogEncode.JSON) {
        log.setEncode(messages.LogEncode.JSON);
    }
    else {
        log.setEncode(messages.LogEncode.TEXT);
    }
    if (typeof args.content === 'string' || args.content instanceof String) {
        log.setContent(args.content);
    }
    else {
        log.setContent(JSON.stringify(args.content));
    }
    return log;
}
class LogPersister {
    constructor(server, token) {
        if (server) {
            this.client = new services.LogPersisterClient(server, grpc.credentials.createInsecure());
        }
        if (token) {
            this.token = token;
        }
    }
    stop() {
        grpc.closeClient(this.client);
    }
    add(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this.client) { //discard
                    resolve(true);
                    return;
                }
                var arg = new messages.LogAddArg();
                arg.setToken(this.token);
                var logs = [];
                if (Array.isArray(args)) {
                    args.forEach((l) => {
                        l.type = define_1.LogType.List;
                        logs.push(asPbLog(l));
                    });
                }
                else {
                    args.type = define_1.LogType.List;
                    logs.push(asPbLog(args));
                }
                arg.setLogsList(logs);
                this.client.add(arg, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
    upsert(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this.client) {
                    resolve(true);
                    return;
                }
                var arg = new messages.LogUpsertArg();
                arg.setToken(this.token);
                args.type = define_1.LogType.Object;
                arg.setLog(asPbLog(args));
                this.client.upsert(arg, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
    remove(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this.client) {
                    resolve(true);
                    return;
                }
                var arg = new messages.LogRemoveArg();
                arg.setToken(this.token);
                arg.setType(args.type);
                arg.setKey(args.key);
                arg.setOrderby(args.orderby);
                arg.setSkip(args.skip);
                arg.setLimit(args.limit);
                this.client.remove(arg, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
    set(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.upsert(args);
        });
    }
    unset(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args.type = define_1.LogType.Object;
            return this.remove(args);
        });
    }
    clear(args) {
        return __awaiter(this, void 0, void 0, function* () {
            args.type = define_1.LogType.List;
            return this.remove(args);
        });
    }
    show(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!this.client) {
                    resolve(true);
                    return;
                }
                var arg = new messages.LogShowArg();
                arg.setToken(this.token);
                arg.setMessage(args.message);
                this.client.show(arg, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(true);
                });
            });
        });
    }
}
exports.LogPersister = LogPersister;
