const { readFileSync, writeFileSync, existsSync } = require("node:fs")

function utf8(param) {
  let space;
  if (!param.space) {space = 0} else {space = param.space}
    return {
      /**
       * @param {string} key - example: get("key") || get()
       * @returns 
       */
        get: (key) => {
          if (!key) return param.get;
          if (!param.get[key]) return;
          return param.get[key]
        },
        /**
         * @param {any} key - example (...: "value")
         * @param {any} value - value: example ("key": "...")
         */
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object') throw new Error("Modo de uso: \"key\", \"value\"");
            if (typeof key == 'object') {
              let values = [];
              Object.values(key).map((param)=>values.push(param))
              return Object.keys(key).map((keys, index)=>{
                param.get[keys] = values[index]
                writeFileSync(param.path, JSON.stringify(param.get, null, space));
              })
            }
            param.get[key] = value
            writeFileSync(param.path, JSON.stringify(param.get, null, space));
        },
        /**
         * @param {string} key - Use: "key" para apagar um item especifico.
         * @returns
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

function base64(param) {
  let space;
  if (!param.space) {space = 0} else {space = param.space}
    return {
      /**
       * @param {string} key - example: get("key") || get()
       * @returns 
       */
        get: (key) => {
          let obj = {}
          let keys = []
          Object.keys(param.get).map((value) => keys.push(value))
          Object.values(param.get).map((value, index) => ({ [keys[index]]: Buffer.from(value, 'base64').toString("utf-8") }) ).map((value, index) => {Object.assign(obj, value) })
          if (!key) return obj;
          if (!param.get[key]) return;
          return Buffer.from(JSON.stringify(obj[key], null, space)).toString("utf-8");
        },
        /**
         * @param {any} key - example (...: "value")
         * @param {string} value - value: example ("key": "...")
         */
        set: (key, value) => {
            if (!key || value === undefined && typeof key !== 'object') throw new Error("Modo de uso: \"key\", \"value\".");
            if (value !== undefined && typeof value !== 'string') throw new Error("Só passe \"string\" no \"value\".");
            if (typeof key == 'object') {
              let values = [];
              Object.values(key).map((param) => {
                if (typeof param !== 'string') throw new Error("Só passe \"string\" no \"value\".");
                return values.push(param);
              })
              return Object.keys(key).map((keys, index) => {
                param.get[keys] = Buffer.from(values[index]).toString("base64");
                writeFileSync(param.path, JSON.stringify(param.get, null, space));
              })
            }

            param.get[key] = Buffer.from(value).toString("base64")
            writeFileSync(param.path, JSON.stringify(param.get, null, space));
        },
        /**
         * @param {string} key - Use: "key" para apagar um item especifico.
         * @returns
         */
        delete: (key) => {
            if (!key) throw new Error("Obrigatório o uso de uma chave: \"key\"");
            if (typeof key !== "string") throw new Error("String não identificada.");
            delete param.get[key]
            writeFileSync(param.path, Buffer.from(JSON.stringify(param.get, null, space)).toString("utf-8"));
        },
        clear: () => { writeFileSync(param.path, ""); }
    }
}

function modify(dir, space, codifyType) {
  if (!existsSync(dir)) throw new Error("Caminho não encontrado.");
  if (!readFileSync(dir, 'utf-8')) writeFileSync(dir, '{}');
  if (!["utf-8", "base64"].includes(codifyType) && codifyType) throw new Error("Os tipos de valodação de dados são: \"utf-8\" ou \"base64\"");
  
  if (!codifyType || codifyType == "utf-8") {
     return utf8({
      get: JSON.parse(readFileSync(dir, 'utf-8')), // Conteudo do json
      path: dir, // Caminho do arquivo
      space // Espaçamento do Json
    });
  } else { // base64
    return base64({
      get: JSON.parse(readFileSync(dir, 'utf-8')),
      path: dir,
      space
    });
  }
}

class JsonDB {
  /**
  * @param {Number} space - Controle do espaçamento do json. Padão: "0"
  * @param {string} codifyType - Escrita e transcrita de "base64". Padrão: "utf-8"
  * @returns
  */
    constructor(space, codifyType) {
      if (typeof space !== "number" && space) throw new Error(`Tenho certeza de que \"${space}\" não é um numero.`);
      if (typeof codifyType !== "string" && codifyType && codifyType == "") throw new Error(`O tipo: \"${codifyType}\" não é aceito, procure algo como (\"base64\" ).`);
      /**
       * @param {string} dir - Diretório raiz do JSON.
       * @returns 
       */
      this.path = (dir) => modify(dir, space, codifyType);
    }
}

module.exports = { JsonDB }
