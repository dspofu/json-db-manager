"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverEvents = void 0;
const serverConfig_1 = require("../serverConfig");
let settings;
function serverEvents(clientSettings, dirFile, encoding) {
    !clientSettings ? null : settings = clientSettings;
    let methodRead;
    let methodRequest;
    return {
        /**
         * @param events The request event is always executed when the page is loaded.
         * @param callback Your code to run in the respective event.
         */
        on: (events, callback) => {
            if (events === "read") {
                methodRead = { events, callback: () => callback({ settings }) };
            }
            else if (events === "request") {
                methodRequest = { events, callback: (req) => callback(req) };
            }
            else {
                throw new Error(`Unknown or not found event: ${events}`);
            }
        },
        start: () => (0, serverConfig_1.hostDB)(settings, dirFile, encoding, methodRead, methodRequest),
    };
}
exports.serverEvents = serverEvents;
//# sourceMappingURL=manager.js.map