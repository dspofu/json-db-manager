"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8 = void 0;
const node_fs_1 = require("node:fs");
const serverConfig_1 = require("./serverConfig");
function utf8(param) {
    let space;
    if (!param.space) {
        space = 0;
    }
    else {
        space = param.space;
    }
    return {
        hostView: (paramObj) => {
            paramObj.log ? console.log(`Server Settings: Port ${paramObj.port} | Logs: ${paramObj.log} | Refresh: ${!paramObj.update ? false : true}`) : null;
            (0, serverConfig_1.hostDB)(paramObj, param.path, "utf-8");
        },
        get: (key) => {
            if (!key)
                return param.get;
            if (!param.get[key])
                return;
            return param.get[key];
        },
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object')
                throw new Error("How to use: \"key\", \"value\"");
            if (typeof key == 'object') {
                let values = [];
                Object.values(key).map((param) => values.push(param));
                return Object.keys(key).map((keys, index) => {
                    param.get[keys] = values[index];
                    (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
                });
            }
            param.get[key] = value;
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        delete: (key) => {
            if (!key)
                throw new Error("The use of a key is mandatory: \"key\"");
            if (typeof key !== "string")
                throw new Error("Unidentified String.");
            delete param.get[key];
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        clear: () => { (0, node_fs_1.writeFileSync)(param.path, "{}"); }
    };
}
exports.utf8 = utf8;
//# sourceMappingURL=utf8.js.map