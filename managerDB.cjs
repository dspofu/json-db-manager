const { readFileSync, writeFileSync, existsSync } = require("node:fs")

function compact(param) {
  let space;
  if (!param.space) {space = 0} else {space = param.space}
    return {
        get: () => param.get,
        /**
         * @param {any} key - example (...: "value")
         * @param {any} value - value: example ("key": "...")
         */
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object') throw new Error("Modo de uso: \"key\", \"value\"");
            if (typeof key == 'object') return writeFileSync(param.path, JSON.stringify(key, null, space));
            param.get[key] = value
            writeFileSync(param.path, JSON.stringify(param.get, null, space));
        },
        /**
         * @param {*} key - Use: "key" para apagar um item especifico.
         */
        delete: (key) => {
            if (!key) throw new Error("Obrigatório o uso de uma chave: \"key\"");
            if (typeof key !== "string") throw new Error("String não identificada.");
            delete param.get[key]
            writeFileSync(param.path, JSON.stringify(param.get, null, space));
        },
        clear: () => { writeFileSync(param.path, "{}"); }
    }
}
class ManagerDB {
  /**
  * @param {Number} space - Controle do espaçamento do json.
  */
    constructor(space) {
      if (typeof space !== "number" && space) throw new Error(`Tenho certeza de que \"${space}\" não é um numero.`);
      /**
       * 
       * @param {string} dir - Diretório raiz do JSON.
       * @returns 
       */
      this.path=(dir)=>{
          if (!existsSync(dir)) { throw new Error("Caminho não encontrado."); }
          else if (!readFileSync(dir, 'utf-8')) {
            writeFileSync(dir, '{}')
            return compact({
              get: JSON.parse(readFileSync(dir, 'utf-8')),
              path: dir,
              space
            })
          }
          else return compact({
            get: JSON.parse(readFileSync(dir, 'utf-8')), // Conteudo do json
            path: dir, // Caminho do arquivo
            space // Espaçamento do Json
        });
      }
    }
}
module.exports = { ManagerDB }