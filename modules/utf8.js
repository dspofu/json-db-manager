"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8 = void 0;
const node_fs_1 = require("node:fs");
function utf8(param) {
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
            if (!key)
                return param.get;
            if (!param.get[key])
                return;
            return param.get[key];
        },
        /**
         * @param {object | string} key - example (...: "value")
         * @param {object | string | number} value - value: example ("key": "...")
         */
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
        /**
         * @param {string} key - Use: "key" to delete a specific item.
         */
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