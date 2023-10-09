"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostDB = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const http_1 = tslib_1.__importDefault(require("http"));
const error_1 = require("./html/error");
let conf = 1;
function hostDB(param, dirFile, encoding) {
    let contentJson;
    if (encoding == "utf-8") {
        contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
    }
    else {
        contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
        // let content: string = JSON.stringify(readFileSync(dirFile, "utf-8"))
        // let obj: any = {}
        // let keys: string[] = []
        // Object.keys(content).map((value) => keys.push(value))
        // Object.values(content).map((value, index) => ({ [keys[index]]: Buffer.from((value as any).toString(), 'base64').toString("utf-8") })).map((value) => { Object.assign(obj, value) })
        // return contentJson = obj;
    }
    if (!param.port || isNaN(param.port))
        throw new Error("Pass a port to the server.");
    http_1.default.createServer((req, res) => {
        if (req.url == "/data") {
            param.log && conf === 1 ? console.log(`🟢 | Protocol of LocalHost: \"http://localhost:${param.port} | http://${res.socket?.remoteAddress}${req.url}:${param.port}\"`) : null;
            param.log ? console.log(`Accessed by remote IP: ${req.socket.remoteAddress?.replace("::ffff:", "")}`) : null;
            conf++;
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(contentJson);
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(error_1.htmlError);
        }
    }).listen(param.port, "0.0.0.0");
    if (param.update) {
        setInterval(() => {
            if (encoding == "utf-8") {
                contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
            }
            else {
                contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
                // let content: string = JSON.stringify(readFileSync(dirFile, "utf-8"))
                // let obj: any = {}
                // let keys: string[] = []
                // Object.keys(content).map((value) => keys.push(value))
                // Object.values(content).map((value, index) => ({ [keys[index]]: Buffer.from((value as any).toString(), 'base64').toString("utf-8") })).map((value) => { Object.assign(obj, value) })
                // return contentJson = obj;
            }
        }, 2000);
    }
}
exports.hostDB = hostDB;
//# sourceMappingURL=serverConfig.js.map