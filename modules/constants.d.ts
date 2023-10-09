type CodifyOptions = "utf-8" | "base64";
interface Param {
    get: any;
    path: string;
    space?: number;
}
interface ObjectHost {
    port: 8080 | 3000;
    log?: boolean;
    update?: boolean;
}
interface CodifyUtf8 {
    /**
     * @param param - { port: number, log: boolean, update: boolean }
     */
    hostView(param: ObjectHost): void;
    /**
     * @param {string} key - example: get("key") || get()
     */
    get(key?: string): any;
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
interface CodifyBase64 {
    /**
     * @param param - { port: number, log: true, update: true }
     */
    hostView(param: ObjectHost): void;
    /**
     * @param {string} key - example: get("key") || get()
     */
    get(key?: string): any;
    /**
     * @param {object | string} key - example (...: "value")
     * @param {string} value - value: example ("key": "...")
     */
    set(key: string, value: string): void;
    /**
     * @param {string} key - Use: "key" to delete a specific item.
     */
    delete(key: string): void;
    clear(): void;
}
export { CodifyOptions, Param, ObjectHost, CodifyUtf8, CodifyBase64 };
