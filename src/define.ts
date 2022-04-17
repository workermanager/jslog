
/**
 * 日志类型
 */
export enum LogType {
    /** 对象类型 */
    Object,
    /** 列表类型 */
    List
}

/**
 * 日志数据格式
 */
export enum LogEncode {
    /** 文本 */
    TEXT,
    /** JSON */
    JSON
}

/**
 * 日志记录
 */
export class LogItem {
    /** 日志类型 */
    type: LogType;
    /** 日志key */
    key: string;
    /** 日志显示类型 */
    show: string;
    /** 日志格式 */
    encode: LogEncode;
    /** 日志内容 */
    content: any;
}

/**
 * 清除日志参数
 */
export class LogRemoveArg {
    type: LogType;
    key: string;
    orderby?: string = "";
    skip?: number = 0;
    limit?: number = 0;
}

/**
 * 日志显示参数 
 */
export class LogShowArg {
    message: string;
}
