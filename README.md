# managerDB
Gerenciador de json como "data base(DB)" local

Um simples __avançado__ gerenciador de arquivos em json para usar como quiser.

## Metodos

### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

<pre>console.log(new DB().path("./dir").get())</pre>
<pre>
  {
    "KeyExample": {"velueExamples": [0, "1", [2, 2.5], undefined, null, 6-1, "six", {"seven": 7}]},
    "KeyExample1": 8,
  }
</pre>
## 
### SET

Passe a chave *"key"* de sua preferencia e o valor *"value"*

<pre>new DB().path("./dir").set("key", "value");</pre>
// Resultado
<pre>
  {
    "key": "value"
  }</pre>

## 

### DELETE

Passe a chave *"key"* que deseje deletar

<pre>new DB().path("./dir").delete("keyExample")</pre>
// Resultado
<pre>
  {
    "KeyExample1": 8,
  }
</pre>
## 

### CLEAR

Deleta todo json e o deixa já preparado para novos valores

<pre>new DB().path("./dir").clear()</pre>
// Resultado
<pre>
  {
    // void
  }
</pre>
