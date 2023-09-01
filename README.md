# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/managerDB) managerDB [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="40">](https://www.npmjs.com/package/managerDB)
Gerenciador de json como "data base(DB)" local

Um simples ou até mesmo um __avançado__ gerenciador de arquivos em json para usar como quiser.

## Metodos
<pre>const db = new DB();</pre>
### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

<pre>console.log(db.path("./dir").get())</pre>
// Resultado `exemplo`
<pre>
  {
    "KeyExample": {"velueExamples": [0, "1", [2, 2.5]]},
    "KeyExample1": 3,
  }
</pre>
## 
### SET

Passe a chave *"key"* de sua preferencia e o valor *"value"*

<pre>db.path("./dir").set("key", "value");</pre>
// Resultado `exemplo`
<pre>
  {
    "key": "value"
  }</pre>

## 

### DELETE

Passe a chave *"key"* que deseje deletar

<pre>db.path("./dir").delete("keyExample")</pre>
// Resultado `exemplo`
<pre>
  {
    "KeyExample1": 8,
  }
</pre>
## 

### CLEAR

Deleta todo json e o deixa já preparado para novos valores

<pre>db.path("./dir").clear()</pre>
// Resultado `exemplo`
<pre>
  {
    // void
  }
</pre>