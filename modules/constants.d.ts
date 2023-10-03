type codifyOptions = "utf-8" | "base64";
interface Param {
    get: any;
    path: string;
    space?: number;
}
interface CodifyUtf8 {
    get(key?: string): any;
    set(key: object | string, value?: object | number | string): void;
    delete(key: string): void;
    clear(): void;
}
interface CodifyBase64 {
    get(key?: string): any;
    set(key: string, value: string): void;
    delete(key: string): void;
    clear(): void;
}
export { codifyOptions, Param, CodifyUtf8, CodifyBase64 };
