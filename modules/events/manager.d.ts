import { ObjectHost, ReadMethod, RequestMethod, ServerEventsType } from "../constants";
declare function serverEvents(clientSettings: ObjectHost, dirFile: string, encoding: string): {
    /**
     * @param events The request event is always executed when the page is loaded.
     * @param callback Your code to run in the respective event.
     */
    on: <T extends ServerEventsType>(events: T, callback: (meth: T extends "read" ? ReadMethod : RequestMethod) => object) => {
        events: T;
        callback: () => object;
    };
    start: () => void;
};
export { serverEvents };
