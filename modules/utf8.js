"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8 = void 0;
const node_fs_1 = require("node:fs");
const manager_1 = require("./events/manager");
const methods_1 = require("./fetchRecurs/methods");
function utf8(param) {
    let space;
    if (!param.space) {
        space = 0;
    }
    else {
        space = param.space;
    }
    return {
        hostView(paramObj) {
            if (!paramObj || !paramObj.port || typeof paramObj.port !== "number")
                throw new Error("\"port\" requires a numeric value.");
            if (paramObj.update && typeof paramObj?.update !== "boolean")
                throw new Error("\"update\" only accepts boolean value.");
            return (0, manager_1.serverEvents)(paramObj, param.path, "utf-8");
        },
        get(key) {
            if (!key)
                return param.get;
            if (!param.get[key])
                return;
            return param.get[key];
        },
        fetch(key) {
            if (!key || typeof key !== 'string')
                throw new Error("Unable to validate \"key\", use type \"string\".");
            return {
                get: (value) => methods_1.methods.get("utf-8", param, key, value),
                set: (value) => { methods_1.methods.set("utf-8", param, key, value), (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space)); },
                add: (value) => { methods_1.methods.add("utf-8", param, key, value), (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space)); },
                sub: (value) => { methods_1.methods.sub("utf-8", param, key, value), (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space)); },
                mapper: (callback) => { methods_1.methods.mapper("utf-8", param, key, callback), (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space)); },
                clear: () => { methods_1.methods.clear("utf-8", param, key), (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space)); },
            };
        },
        set(key, value) {
            if (!key || (value === undefined && typeof key !== 'object' && value !== null))
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
        add(key, value) {
            if (!key || !value || (typeof value !== "number" || typeof key !== "string"))
                throw new Error("How to use: \"key\", \"value\"\nkey: String | value: Number");
            let get = param.get[key] || 0;
            if (!get && get !== 0)
                throw new Error("Key selection does not exist.");
            if (typeof get !== "number")
                throw new Error("Use json with a number value.");
            param.get[key] = get + value;
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        sub(key, value) {
            if (!key || !value || (typeof value !== "number" || typeof key !== "string"))
                throw new Error("How to use: \"key\", \"value\"\nkey: String | value: Number");
            let get = param.get[key] || 0;
            if (!get && get !== 0)
                throw new Error("Key selection does not exist.");
            if (typeof get !== "number")
                throw new Error("Use json with a number value.");
            param.get[key] = get - value;
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        delete(key) {
            if (!key)
                throw new Error("The use of a key is mandatory: \"key\"");
            if (typeof key !== "string")
                throw new Error("Unidentified String.");
            delete param.get[key];
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        clear() { (0, node_fs_1.writeFileSync)(param.path, "{}"); }
    };
}
exports.utf8 = utf8;
//# sourceMappingURL=utf8.js.map