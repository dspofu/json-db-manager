import { readFileSync, writeFileSync } from "node:fs"
const src = (param) => {
    return {
        get: JSON.parse(readFileSync(`./src/config/system/json/${param}.json`)),
        path: `./src/config/system/json/${param}.json`
    }
}
function compact(param) {
    return {
        get: () => param.get,
        /**
         * @param {any} key - example (key: "?", ...)
         * @param {any} value - value: example (..., value: "?")
         */
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object') throw new Error("Obrigatório o uso: \"key\", \"value\"")
            if (typeof key == 'object') return writeFileSync(param.path, JSON.stringify(key, null, 4));
            param.get[key] = value
            writeFileSync(param.path, JSON.stringify(param.get, null, 4))
        },
        /**
         * @param {*} key - Use: "key" para apagar especifico.
         */
        delete: (key) => {
            if (!key) throw new Error("Obrigatório o uso de uma chave: \"key\"")
            if (typeof key !== "string"/* && typeof key !== 'object'*/) throw new Error("String não identificada.")
            delete param.get[key]
            writeFileSync(param.path, JSON.stringify(param.get, null, 4))
        },
        clear: () => {
            writeFileSync(param.path, "{}")
        }
    }
}
class DB {
    constructor() {
        this.path=(param)=>compact(src(param))
    }
}
export { DB }