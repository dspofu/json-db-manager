"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDB = void 0;
const node_fs_1 = require("node:fs");
const utf8_1 = require("./modules/utf8");
const base64_1 = require("./modules/base64");
function modify(dir, space, codifyType, autoCreatFile) {
    if (!(0, node_fs_1.existsSync)(dir) && autoCreatFile == true) {
        try {
            (0, node_fs_1.writeFileSync)(dir, "{}");
        }
        catch (err) {
            throw new Error(`Error when trying to create file: ${dir}`);
        }
    }
    else if (!(0, node_fs_1.existsSync)(dir)) {
        throw new Error("Directory not found.");
    }
    if (!(0, node_fs_1.readFileSync)(dir, 'utf-8'))
        (0, node_fs_1.writeFileSync)(dir, '{}');
    if (!["utf-8", "base64"].includes(codifyType) && codifyType)
        throw new Error("Data validation types are: \"utf-8\" or \"base64\"");
    const methods = {
        get: JSON.parse((0, node_fs_1.readFileSync)(dir, 'utf-8')), // Conteudo do json
        path: dir, // Caminho do arquivo
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
    autoCreatFile;
    /**
    * @param {Number} space - Json spacing control. Default: "0"
    * @param {string} codifyType - Written and transcribed from "base64". Default: "utf-8"
    * @param {boolean} autoCreatFile - Automatically create a file if it doesn't exist
    */
    constructor(space, codifyType, autoCreatFile) {
        this.space = space;
        this.codifyType = codifyType;
        this.autoCreatFile = autoCreatFile;
        if (typeof space !== "number" && space)
            throw new Error(`I'm pretty sure \"${space}\" is not a number.`);
        if (typeof codifyType !== "string" && codifyType && codifyType == "")
            throw new Error(`The type: \"${codifyType}\" is not accepted, look for something like (\"base64\" ).`);
    }
    /**
     * @param {string} dir - JSON file root directory.
     */
    path = (dir) => modify(dir, this.space, this.codifyType, this.autoCreatFile);
}
exports.JsonDB = JsonDB;
//# sourceMappingURL=DB.Json.js.map