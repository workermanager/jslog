import { LogShowArg } from ".";
import { LogItem, LogRemoveArg } from "./define";
export declare class LogPersister {
    client?: any;
    token?: string;
    constructor(server?: string, token?: string);
    stop(): void;
    add(args: LogItem | LogItem[]): Promise<boolean>;
    upsert(args: LogItem): Promise<boolean>;
    remove(args: LogRemoveArg): Promise<boolean>;
    set(args: LogItem): Promise<boolean>;
    unset(args: LogRemoveArg): Promise<boolean>;
    clear(args: LogRemoveArg): Promise<boolean>;
    show(args: LogShowArg): Promise<boolean>;
}
//# sourceMappingURL=log.d.ts.map