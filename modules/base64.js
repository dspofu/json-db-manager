"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64 = void 0;
const node_fs_1 = require("node:fs");
function base64(param) {
    let space;
    if (!param.space) {
        space = 0;
    }
    else {
        space = param.space;
    }
    return {
        /**
         * @param {string} key - example: get("key") || get()
         */
        get: (key) => {
            let obj = {};
            let keys = [];
            Object.keys(param.get).map((value) => keys.push(value));
            Object.values(param.get).map((value, index) => ({ [keys[index]]: Buffer.from(value.toString(), 'base64').toString("utf-8") })).map((value) => { Object.assign(obj, value); });
            if (!key)
                return obj;
            if (!param.get[key])
                return;
            return Buffer.from(JSON.stringify(obj[key].toString(), null, space)).toString("utf-8");
        },
        /**
         * @param {object | string} key - example (...: "value")
         * @param {string} value - value: example ("key": "...")
         */
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object')
                throw new Error("How to use: \"key\", \"value\".");
            if (value !== undefined && typeof value !== 'string')
                throw new Error("Just pass \"string\" in \"value\".");
            if (typeof key == 'object') {
                let values = [];
                Object.values(key).map((param) => {
                    if (typeof param !== 'string')
                        throw new Error("Just pass \"string\" in \"value\".");
                    return values.push(param);
                });
                return Object.keys(key).map((keys, index) => {
                    param.get[keys] = Buffer.from(values[index]).toString("base64");
                    (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
                });
            }
            param.get[key] = Buffer.from(value).toString("base64");
            (0, node_fs_1.writeFileSync)(param.path, JSON.stringify(param.get, null, space));
        },
        /**
         * @param {string} key - Use: "key" to delete a specific item.
         */
        delete: (key) => {
            if (!key)
                throw new Error("The use of a key is mandatory: \"key\"");
            if (typeof key !== "string")
                throw new Error("Unidentified String.");
            delete param.get[key];
            (0, node_fs_1.writeFileSync)(param.path, Buffer.from(JSON.stringify(param.get, null, space)).toString("utf-8"));
        },
        clear: () => { (0, node_fs_1.writeFileSync)(param.path, ""); }
    };
}
exports.base64 = base64;
//# sourceMappingURL=base64.js.map