

import { LogPersister, LogEncode } from "jslog"

async function test() {
    console.log(`test log is starting by ${process.env.LOG_SERVER},${process.env.LOG_TOKEN}`);
    var logSrv = new LogPersister(process.env.LOG_SERVER, process.env.LOG_TOKEN)
    await logSrv.add({
        key: "abc0",
        show: "show0",
        content: "data0",
    });
    await logSrv.add([{
        key: "abc0",
        show: "show0",
        content: "data1",
    }, {
        key: "abc0",
        show: "show0",
        content: "data2",
    }]);
    await logSrv.clear({
        key: "abc0",
    });

    await logSrv.set({
        key: "abcx",
        show: "show0",
        content: "data1",
    });
    await logSrv.set({
        key: "abcx",
        show: "show0",
        content: "data2",
    });
    await logSrv.unset({
        key: "abcx",
    });

    await logSrv.set({
        key: "abcy",
        show: "show0",
        encode: LogEncode.JSON,
        content: { "data": "1" },
    });
    await logSrv.set({
        key: "abcy",
        show: "show0",
        encode: LogEncode.JSON,
        content: { "data": "1" },
    });
    await logSrv.unset({
        key: "abcy",
    });
    await logSrv.show({
        message: "abcy",
    });
    console.log(`test log is done`);
}

test();