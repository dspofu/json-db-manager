# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/managerDB) ManagerDB [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="40">](https://www.npmjs.com/package/managerDB)

Um simples gerenciador de json como "data base(DB)" local em sua aplicação bem __avançado__ e __maleável__ para usar como quiser.

- Compatível com ES5 & ES6</li>
- Allowed to use "require()" and "import"

```js
const db = new ManagerDB();
```

Você pode escolher o espacamendo colocando o numero de espaço dentro da classe `ManagerDB`, sendo o `padrão: 0`

```js
new ManagerDB(2); // Espaçamento adicional
```

## Metodos
### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

```js
console.log(db.path("./dir").get())
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
db.path("./dir").set("key", "value");
```
#### Resultado `exemplo`
```js
  {
    "key": "value"
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
