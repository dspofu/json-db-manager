"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hostDB = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const http_1 = tslib_1.__importDefault(require("http"));
const error_1 = require("./html/error");
function hostDB(param, dirFile, encoding, eventRead, eventRequest) {
    let contentJson;
    function json64() {
        let content = JSON.parse((0, fs_1.readFileSync)(dirFile, "utf-8"));
        let obj = {};
        let keys = [];
        Object.keys(content).map((value) => keys.push(value));
        Object.values(content).map((value, index) => ({ [keys[index]]: Buffer.from(value.toString(), 'base64').toString("utf-8") })).map((value) => Object.assign(obj, value));
        return JSON.stringify(obj);
    }
    switch (encoding) {
        case "utf-8":
            contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
            break;
        case "base64":
            contentJson = json64();
            break;
        default:
            contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
    }
    if (!param.port || isNaN(param.port))
        throw new Error("Pass a port to the server.");
    http_1.default.createServer((req, res) => {
        switch (req.url) {
            case "/data":
                // console.log("IP: ", req.socket.remoteAddress);
                eventRequest?.callback(); // REQUEST
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(contentJson);
                break;
            case "/image":
                res.writeHead(200, { 'Content-Type': 'image/png' });
                let img = __dirname + "\\html\\404Error.png";
                const imgStream = (0, fs_1.createReadStream)(img);
                imgStream.pipe(res);
                break;
            default:
                {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(error_1.htmlError);
                }
                break;
        }
    }).listen(param.port, "0.0.0.0", eventRead?.callback() /* READ */);
    if (param.update) {
        setInterval(() => {
            switch (encoding) {
                case "utf-8":
                    contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
                    break;
                case "base64":
                    contentJson = json64();
                    break;
                default:
                    contentJson = (0, fs_1.readFileSync)(dirFile, "utf-8");
            }
        }, 2000);
    }
}
exports.hostDB = hostDB;
//# sourceMappingURL=serverConfig.js.map