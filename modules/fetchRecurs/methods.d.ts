import { Param } from "../constants";
declare let methods: {
    get(type: "utf-8" | "base64", param: Param, key: string, value?: string): any;
    set(type: "utf-8" | "base64", param: Param, key: string, value: string | object | number | string[] | number[]): void;
    add(type: "utf-8" | "base64", param: Param, key: string, value: number): void;
    sub(type: "utf-8" | "base64", param: Param, key: string, value: number): void;
    mapper<O, K extends string>(type: "utf-8" | "base64", param: Param, key: string, callback: (obj: O, keys: K) => void): void;
    clear(type: "utf-8" | "base64", param: Param, key: string): void;
};
export { methods };
