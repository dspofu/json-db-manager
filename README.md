# managerDB
Gerenciador de json como data base

Um simples __avançado__ gerenciador de arquivos em json para usar como quiser.

## Metodos

### GET

__path__ é uma função que vai te fornecer os objetos assim que você inserir o caminho do arquivo json

__console.log(new DB().path("./dir").get())__
## 
### SET

Passe a chave *"key"* de sua preferencia e o valor *"value"*

__new DB().path("./dir").set("key", "value")__
<h6>{
  "key": "value"
}</h6>Resultado

## 

### DELETE

Passe a chave *"key"* que deseje deletar

__new DB().path("./dir").delete("key")__

## 

### CLEAR

Deleta todo json e o deixa já preparado para novos valores

__new DB().path("./dir").clear()__
