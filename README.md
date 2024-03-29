# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/json-db-manager) json-db-manager [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="46">](https://www.npmjs.com/package/json-db-manager)

A simple json manager like `"data base (DB)"` local to your application, very __advanced__ and __malleable__ to use as you want.

* Compatible with several EcmaScript (ES) technologies
* Allowed to use `"require()"` and `"import"`

## New features or changes

* A new parameter in the class, which is for the creation of the JSON file that was defined in "Path" and that if no existing will be created a file.
* "Request" events now have more items that return to their object.

## Bugs fixed from the previous version

* The "read" event was not responding.

## 

### How to use

```js
const db = new JsonDB();
```

>You can choose the spacing by placing the number of spaces inside the `JsonDB` class, the `default being: 0`

```js
new JsonDB(2); // Espaçamento adicional
```

>You can also choose between a `json` storing `"base64"` or `"utf-8"` which is the default. For `"uft-8"` do not enter a second parameter.

```js
new JsonDB(0, "utf-8"); // Codificação opicional
```
>The third parameter is responsible for management if your `json` file defined in `"path"` does not exist, can automatically create the file, being the standard: `"false"`

```js
new JsonDB(0, "utf-8", true); // opicional para para criar arquivo.
```

## Metodos

### GET

__path__ is a function that will provide you with the objects as soon as you enter the json file path

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

Pass the *"key"* of your choice and the *"value"*

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

Pass the *"key"* you want to delete

```js
db.path("./dir").delete("keyExample");
```

#### Resultado `exemplo`

```js
  {
    //keyExample is deleted
    "KeyExample1": 8,
  }
```

## 

### CLEAR

Delete all json and leave it ready for new values

```js
db.path("./dir").clear();
```
#### Resultado `exemplo`
```js
{} // Void
```

##

### hostView

To create a server with your JSON file

* The `"port"` method is responsible for listing the server port.
* The `"update"` method allows when the page is reloaded to update the information based on the `"json file"`.
* The `"update"` is optional and the default is `"false"`

```js
db.path("./test.json").hostView({ port: 3000, update: true })
```

"hostView" has two methods, `"on"` and `"start"`.

>The "on" method is responsible for performing manipulations on the "read" and "request" events.

While the `"on"` event is activated when the server is turned on, the `"request"` event is activated every time the server is accessed, such as when reloading the page or opening it for the first time.

### Object made available by the event `"read"`
```json
{
  "settings": {
    "port": "number",
    "update": "boolean"
  }
}
```
* __port__ - Refers to the door chosen by you to the server.
* __update__ - To indicate if the server will be updating the page.

### Object made available by the event `"request"`
```json
{
  "url": "string",
  "method": "string",
  "ip": "number" 
}
```
* __url__ - The route used to display `"JSON"`.
* __method__ - The requisition method that was made on the server.
* __ip__ - It is the `"IP"` of the device that accessed the server on the JSON file route.

### Object made available by the event `"request"`
url: string, method: string, ip: number

```js
let num = 1;
const server = db.path("./test.json").hostView({ port: 3000, update: true })

server.on("read", (req) => {
    console.log(`Project started.\nPort: ${req.settings.port}\n`);
})

server.on("request", (req) => {
    console.log(`Project acessed: ${num} time\nURL acess: "${req.url}"\nAccessed by IP: ${req.ip}`);
    num++
})

server.start()//server initialization
```


#### Resultado `exemplo`

```js
// Your browser | example URL: http://localhost:3000/data 

1 {
2   "KeyExample1": 8,
3 }

// Your logs | example

Project started.
Port: 3000

Project acessed: 1 time
URL acess: "/data"
Accessed by IP: 192.168.0.17
```

>To connect other devices to the server, simply be on the same network and use the `"IPv4"` of your project machine along with the `"port"` listed.

### Tip for `"Windows"` users:

* Open "cmd" and run `"ipconfig"`.
* Look for the numbers in the line that says `"IPv4 Address"`.

#### Resultado `exemplo`

```log
# URL in your browser | example

http://192.168.0.22:3000

```