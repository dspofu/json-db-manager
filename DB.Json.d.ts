import { CodifyOptions, CodifyUtf8, CodifyBase64 } from "./modules/constants";
declare class JsonDB<typeEncoder extends CodifyOptions = "utf-8"> {
    private space;
    private codifyType;
    /**
    * @param {Number} space - Json spacing control. Default: "0"
    * @param {string} codifyType - Written and transcribed from "base64". Default: "utf-8"
    */
    constructor(space: number, codifyType: typeEncoder);
    /**
     * @param {string} dir - JSON file root directory.
     */
    path: (dir: string) => typeEncoder extends "utf-8" ? CodifyUtf8 : CodifyBase64;
}
export { JsonDB };
