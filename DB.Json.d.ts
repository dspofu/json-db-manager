import { CodifyOptions, CodifyUtf8, CodifyBase64 } from "./modules/constants";
declare class JsonDB<typeEncoder extends CodifyOptions = "utf-8"> {
    private space;
    private codifyType;
    private autoCreatFile;
    /**
    * @param {Number} space - Json spacing control. Default: "0"
    * @param {string} codifyType - Written and transcribed from "base64". Default: "utf-8"
    * @param {boolean} autoCreatFile - Automatically create a file if it doesn't exist
    */
    constructor(space: number, codifyType: typeEncoder, autoCreatFile: boolean);
    /**
     * @param {string} dir - JSON file root directory.
     */
    path: (dir: string) => typeEncoder extends "utf-8" ? CodifyUtf8 : CodifyBase64;
}
export { JsonDB };
