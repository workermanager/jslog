const messages = require('./log_pb');
const services = require('./log_grpc_pb');
const grpc = require('@grpc/grpc-js');

import { LogShowArg } from ".";
import { LogItem, LogEncode, LogRemoveArg, LogType } from "./define"

function asPbLog(args: LogItem): any {
    var log = new messages.LogItem();
    log.setType(args.type);
    log.setKey(args.key);
    log.setShow(args.show);
    if (args.encode == LogEncode.JSON) {
        log.setEncode(messages.LogEncode.JSON);
    } else {
        log.setEncode(messages.LogEncode.TEXT);
    }
    if (typeof args.content === 'string' || args.content instanceof String) {
        log.setContent(args.content);
    } else {
        log.setContent(JSON.stringify(args.content));
    }
    return log;
}

export class LogPersister {
    client?: any;
    token?: string;
    constructor(server?: string, token?: string) {
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

    async add(args: LogItem | LogItem[]): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.client) {//discard
                resolve(true);
                return;
            }
            var arg = new messages.LogAddArg();
            arg.setToken(this.token);
            var logs = [];
            if (Array.isArray(args)) {
                args.forEach((l) => {
                    l.type = LogType.List;
                    logs.push(asPbLog(l));
                })
            } else {
                args.type = LogType.List;
                logs.push(asPbLog(args));
            }
            arg.setLogsList(logs);
            this.client.add(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }

    async upsert(args: LogItem): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (!this.client) {
                resolve(true);
                return;
            }
            var arg = new messages.LogUpsertArg();
            arg.setToken(this.token);
            args.type = LogType.Object;
            arg.setLog(asPbLog(args));
            this.client.upsert(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }


    async remove(args: LogRemoveArg): Promise<boolean> {
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
            this.client.remove(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }

    async set(args: LogItem) {
        return this.upsert(args);
    }

    async unset(args: LogRemoveArg) {
        args.type = LogType.Object;
        return this.remove(args);
    }

    async clear(args: LogRemoveArg) {
        args.type = LogType.List;
        return this.remove(args);
    }

    async show(args: LogShowArg): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                resolve(true);
                return;
            }
            var arg = new messages.LogShowArg();
            arg.setToken(this.token);
            arg.setMessage(args.message);
            this.client.show(arg, (err: any) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(true);
            });
        });
    }
}
