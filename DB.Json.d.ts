declare function modify(dir: string, space: number, codifyType: string): {
    /**
     * @param {string} key - example: get("key") || get()
     * @returns
     */
    get: (key: string) => any;
    /**
     * @param {any} key - example (...: "value")
     * @param {string} value - value: example ("key": "...")
     */
    set: (key: string | object, value: string) => void[] | undefined;
    /**
     * @param {string} key - Use: "key" para apagar um item especifico.
     * @returns
     */
    delete: (key: string) => void;
    clear: () => void;
};
type codifyOptions = "utf-8" | "base64";
declare class JsonDB {
    path: (dir: string) => ReturnType<typeof modify>;
    /**
    * @param {Number} space - Controle do espaçamento do json. Padão: "0"
    * @param {string} codifyType - Escrita e transcrita de "base64". Padrão: "utf-8"
    * @returns
    */
    constructor(space: number, codifyType: codifyOptions);
}
export { JsonDB };
