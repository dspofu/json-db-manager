"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
function objectMap(obj, key, callback) {
    function recurse(obj) {
        for (let keys in obj) {
            if (key == keys)
                callback(obj, keys);
            else if (typeof obj[keys] === 'object')
                recurse(obj[keys]);
        }
    }
    return recurse(obj);
}
function objectMap64(obj, key, callback) {
    function recurse(obj) {
        for (let keys in obj) {
            if (key == keys)
                callback(obj, keys);
            else if (typeof obj[keys] === 'object')
                recurse(obj[keys]);
        }
    }
    return recurse(obj);
}
let methods = {
    get(type, param, key, value) {
        let filtered = [];
        if (type == "utf-8") {
            objectMap(param.get, key, (obj, keys) => filtered.push(obj[keys]));
        }
        else {
            objectMap64(param.get, key, (obj, keys) => filtered.push(obj[keys]));
        }
        if (!value)
            return filtered;
        return filtered.find((x) => x == value);
    },
    set(type, param, key, value) {
        if (!value || (value === undefined && ["string", "object", "boolean"].includes(typeof value) && value !== null))
            throw new Error("How to use: \"value\" or \"{\"key\": \"value\"} or [0, \"1\", {\"key\": \"value\"}]\"");
        if (type == "utf-8")
            return objectMap(param.get, key, (obj, keys) => obj[keys] = value);
        else
            return objectMap64(param.get, key, (obj, keys) => obj[keys] = value);
    },
    add(type, param, key, value) {
        if (typeof value !== "number")
            throw new Error("Use only numeric type.");
        if (type == "utf-8")
            return objectMap(param.get, key, ((obj, keys) => obj[keys] += value));
        else
            return objectMap64(param.get, key, ((obj, keys) => obj[keys] += value));
    },
    sub(type, param, key, value) {
        if (typeof value !== "number")
            throw new Error("Use only numeric type.");
        if (type == "utf-8")
            return objectMap(param.get, key, ((obj, keys) => obj[keys] -= value));
        else
            return objectMap64(param.get, key, ((obj, keys) => obj[keys] -= value));
    },
    mapper(type, param, key, callback) {
        if (type == "utf-8")
            return objectMap(param.get, key, ((obj, keys) => callback(obj, keys)));
        else
            return objectMap64(param.get, key, ((obj, keys) => callback(obj, keys)));
    },
    clear(type, param, key) {
        if (type == "utf-8")
            return objectMap(param.get, key, ((obj, keys) => delete obj[keys]));
        else
            return objectMap64(param.get, key, ((obj, keys) => delete obj[keys]));
    }
};
exports.methods = methods;
//# sourceMappingURL=methods.js.map