# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/json-db-manager) json-db-manager [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="46">](https://www.npmjs.com/package/json-db-manager)

Um simples gerenciador de json como "data base(DB)" local em sua aplicação bem __avançado__ e __maleável__ para usar como quiser.

- Compatível com ES5 & ES6
- Allowed to use "require()" and "import"

```js
const db = new JsonDB();
```

>Você pode escolher o espacamendo colocando o numero de espaço dentro da classe `JsonDB`, sendo o `padrão: 0`


```js
new JsonDB(2); // Espaçamento adicional
```

>Você tambem poderá optar entre um `json` armazenando "base64" ou "utf-8" que é o padrão. Para "uft-8" não insira um segundo parâmetro.

```js
new JsonDB(0, "base64"); // Codificação opicional
```

## Metodos
### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

```js
console.log(db.path("./dir").get())
// db.path("./dir").get("KeyExample")  Para procurar por um item especifico
```
#### Resultado `exemplo`
```js
  {
    "KeyExample": {"velueExamples": [0, "1", [2, 2.5]]},
    "KeyExample1": 3,
  }
```
## 
### SET

Passe a chave *"key"* de sua preferencia e o valor *"value"*

```js
db.path("./dir").set("key", "value"); // Criando por parametro.
db.path("./dir").set({"key1": "value"}); // Formatação objeto.
db.path("./dir").set({"key2": "value", "key3": "value"}); // Formatação com objetos.
```
#### Resultado `exemplo`
```js
  {
    "key": "value", // Criando por parametro.
    "key1": "value", // Formatação objeto.
    "key2": "value", // Formatação com objetos.
    "key3": "value", // Formatação com objetos.
  }
```
## 
### DELETE

Passe a chave *"key"* que deseje deletar

```js
db.path("./dir").delete("keyExample");
```
#### Resultado `exemplo`
```js
  {
    "KeyExample1": 8,
  }
```
## 
### CLEAR

Deleta todo json e o deixa já preparado para novos valores

```js
db.path("./dir").clear();
```
#### Resultado `exemplo`
```js
{} // Void
```