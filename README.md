# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/managerDB) ManagerDB [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="40">](https://www.npmjs.com/package/managerDB)

Um simples gerenciador de json como "data base(DB)" local em sua aplicação bem __avançado__ e __maleável__ para usar como quiser.
<ul>
<li>Compatível com ES5 & ES6</li>
<li>Allowed to use "require()" and "import"</li>
</ul>

<pre><code>const db = new ManagerDB();</code></pre>

Você pode escolher o espacamendo colocando o numero de espaço dentro da classe `ManagerDB`, sendo o `padrão: 0`

<pre><code>new ManagerDB(2); // Espaçamento adicional</code></pre>

## Metodos
### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

<pre><code>console.log(db.path("./dir").get())</code></pre>
// Resultado `exemplo`
<pre><code>  {
    "KeyExample": {"velueExamples": [0, "1", [2, 2.5]]},
    "KeyExample1": 3,
  }</code></pre>
## 
### SET

Passe a chave *"key"* de sua preferencia e o valor *"value"*

<pre><code>db.path("./dir").set("key", "value");</code></pre>
// Resultado `exemplo`
<pre><code>  {
    "key": "value"
  }</code></pre>
## 
### DELETE

Passe a chave *"key"* que deseje deletar

<pre><code>db.path("./dir").delete("keyExample")</code></pre>
// Resultado `exemplo`
<pre><code>  {
    "KeyExample1": 8,
  }</code></pre>
## 
### CLEAR

Deleta todo json e o deixa já preparado para novos valores

<pre><code>db.path("./dir").clear()</code></pre>
// Resultado `exemplo`
<pre><code>{} // Void</code></pre>