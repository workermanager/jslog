"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogShowArg = exports.LogRemoveArg = exports.LogItem = exports.LogEncode = exports.LogType = void 0;
/**
 * 日志类型
 */
var LogType;
(function (LogType) {
    /** 对象类型 */
    LogType[LogType["Object"] = 0] = "Object";
    /** 列表类型 */
    LogType[LogType["List"] = 1] = "List";
})(LogType = exports.LogType || (exports.LogType = {}));
/**
 * 日志数据格式
 */
var LogEncode;
(function (LogEncode) {
    /** 文本 */
    LogEncode[LogEncode["TEXT"] = 0] = "TEXT";
    /** JSON */
    LogEncode[LogEncode["JSON"] = 1] = "JSON";
})(LogEncode = exports.LogEncode || (exports.LogEncode = {}));
/**
 * 日志记录
 */
class LogItem {
}
exports.LogItem = LogItem;
/**
 * 清除日志参数
 */
class LogRemoveArg {
    constructor() {
        this.orderby = "";
        this.skip = 0;
        this.limit = 0;
    }
}
exports.LogRemoveArg = LogRemoveArg;
/**
 * 日志显示参数
 */
class LogShowArg {
}
exports.LogShowArg = LogShowArg;
