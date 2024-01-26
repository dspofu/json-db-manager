"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDB = void 0;
const node_fs_1 = require("node:fs");
const utf8_1 = require("./modules/utf8");
const base64_1 = require("./modules/base64");
function modify(dir, space, codifyType) {
    if (!(0, node_fs_1.existsSync)(dir))
        throw new Error("Directory not found.");
    if (!(0, node_fs_1.readFileSync)(dir, 'utf-8'))
        (0, node_fs_1.writeFileSync)(dir, '{}');
    if (!["utf-8", "base64"].includes(codifyType) && codifyType)
        throw new Error("Data validation types are: \"utf-8\" or \"base64\"");
    const methods = {
        get: JSON.parse((0, node_fs_1.readFileSync)(dir, 'utf-8')),
        path: dir,
        space // Espaçamento do Json
    };
    if (!codifyType || codifyType == "utf-8")
        return (0, utf8_1.utf8)(methods);
    else if (codifyType == "base64")
        return (0, base64_1.base64)(methods);
    return methods;
}
class JsonDB {
    space;
    codifyType;
    /**
    * @param {Number} space - Json spacing control. Default: "0"
    * @param {string} codifyType - Written and transcribed from "base64". Default: "utf-8"
    */
    constructor(space, codifyType) {
        this.space = space;
        this.codifyType = codifyType;
        if (typeof space !== "number" && space)
            throw new Error(`I'm pretty sure \"${space}\" is not a number.`);
        if (typeof codifyType !== "string" && codifyType && codifyType == "")
            throw new Error(`The type: \"${codifyType}\" is not accepted, look for something like (\"base64\" ).`);
    }
    /**
     * @param {string} dir - JSON file root directory.
     */
    path = (dir) => modify(dir, this.space, this.codifyType);
}
exports.JsonDB = JsonDB;
//# sourceMappingURL=DB.Json.js.map