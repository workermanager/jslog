/**
 * 日志类型
 */
export declare enum LogType {
    /** 对象类型 */
    Object = 0,
    /** 列表类型 */
    List = 1
}
/**
 * 日志数据格式
 */
export declare enum LogEncode {
    /** 文本 */
    TEXT = 0,
    /** JSON */
    JSON = 1
}
/**
 * 日志记录
 */
export declare class LogItem {
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
export declare class LogRemoveArg {
    type: LogType;
    key: string;
    orderby?: string;
    skip?: number;
    limit?: number;
}
/**
 * 日志显示参数
 */
export declare class LogShowArg {
    message: string;
}
//# sourceMappingURL=define.d.ts.map