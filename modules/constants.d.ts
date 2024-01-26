type CodifyOptions = "utf-8" | "base64";
interface Param {
    get: any;
    path: string;
    space?: number;
}
interface ObjectHost {
    port: 8080 | 3000;
    update?: boolean;
}
type ServerEventsType = "read" | "request";
interface ReadMethod {
    settings: {
        port: number;
        update: boolean;
    };
}
interface RequestMethod extends ReadMethod {
}
interface ServerManager {
    on: (events: ServerEventsType, callback: (value: ReadMethod) => void) => object;
    start: () => void;
}
interface CodifyUtf8 {
    /**
     * @param param - { port: number, update: boolean }
     */
    hostView(param: ObjectHost): ServerManager;
    /**
     * @param {string} key - example: get("key") || get()
     */
    get(key?: string): void;
    /**
     * @param {object | string} key - example (...: "value")
     * @param {object | string | number} value - value: example ("key": "...")
     */
    set(key: object | string, value?: object | number | string): void;
    /**
     * @param {string} key - Use: "key" to delete a specific item.
     */
    delete(key: string): void;
    clear(): void;
}
interface CodifyBase64 extends CodifyUtf8 {
    /**
     * @param {string} key - example: get("key") || get()
     */
    get(key?: string): void;
    /**
     * @param {object | string} key - example (...: "value")
     * @param {string} value - value: example ("key": "...")
     */
    set(key: string, value: string): void;
}
export { ServerManager, CodifyOptions, ServerEventsType, ReadMethod, RequestMethod, Param, ObjectHost, CodifyUtf8, CodifyBase64 };
