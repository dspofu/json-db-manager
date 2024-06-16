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
interface RequestMethod {
    url: string;
    method: string;
    ip: number;
}
interface ServerManager {
    on<T extends ServerEventsType>(events: T, callback: (value: T extends "read" ? ReadMethod : RequestMethod) => void): void;
    start(): void;
}
interface FetchManager {
    /**
     * @param key - example: get("key") || get()
     */
    get<T>(key?: string): T[];
    /**
     * @param value - example: set(string | number | object | array)
     */
    set(value: string | number | object | string[] | number[]): void;
    /**
     * @param value - example: add(number)
     */
    add(value: number): void;
    /**
     * @param value - example: sub(number)
     */
    sub(value: number): void;
    /**
     *
     * @param callback - example: mapper((obj, keys) => { })
     */
    mapper<O, K extends string>(callback: (obj: O, keys: K) => void): void;
    clear(): void;
}
interface CodifyUtf8 {
    /**
     * @param param - { port: number, update: boolean }
     */
    hostView(param: ObjectHost): ServerManager;
    /**
     * @param {string} key - example: get("key") || get()
     */
    get(key?: string): object;
    /**
     * @param {string} key - example: key("key")
     */
    fetch(key: string): FetchManager;
    /**
     * @param {object | string} key - example: set(..., "value")
     * @param {object | string | number} value - example: set("key", "...")
     */
    set(key: object | string, value?: object | number | string): void;
    /**
     * @param {string} key - example: add("key", ...)
     * @param {number} value - example: add(..., "value")
     */
    add(key: string, value: number): void;
    /**
     * @param {string} key - example: sub("key", ...)
     * @param {number} value - example: sub(..., "value")
     */
    sub(key: string, value: number): void;
    /**
     * @param {string} key - Use: "key" to delete a specific item.
     */
    delete(key: string): void;
    /**
     * Clean Json file.
     */
    clear(): void;
}
interface CodifyBase64 extends CodifyUtf8 {
    /**
     * @param {object | string} key - example: set(..., "value")
     * @param {string} value - example: set("key", "...")
     */
    set(key: string, value: string): void;
}
export { ServerManager, CodifyOptions, ServerEventsType, ReadMethod, RequestMethod, Param, ObjectHost, FetchManager, CodifyUtf8, CodifyBase64 };
