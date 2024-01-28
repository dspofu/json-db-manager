import { ObjectHost, ServerEventsType } from "../constants";
declare function serverEvents(clientSettings: ObjectHost, dirFile: string, encoding: string): {
    /**
     * @param events The request event is always executed when the page is loaded.
     * @param callback Your code to run in the respective event.
     */
    on: <T extends ServerEventsType, U>(events: T, callback: (meth: U) => void) => void;
    start: () => void;
};
export { serverEvents };
