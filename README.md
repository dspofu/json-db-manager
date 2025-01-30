# Note: `new version in progress`

# [<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="35">](https://github.com/dspofu/json-db-manager) json-db-manager [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="NPM" width="46">](https://www.npmjs.com/package/json-db-manager)

A simple json manager like `"data base (DB)"` local to your application, very __advanced__ and __malleable__ to use as you want.

* Compatible with several EcmaScript (ES) technologies
* Supports both `"require()"` and `"import"`

## New features or changes

* We now have a new method, the "fetch" method, which works similarly to 'get' but performs a more in-depth search.

## Bugs fixed from the previous version

* The issue of having to instantiate the 'read' and 'request' events to start the local server via 'hostView' has been fixed.

#

### How to use

```js
const { JsonDB } = require("json-db-manager"); // ES5
import { JsonDB } from "json-db-manager"; // ES6

const db = new JsonDB();
```

>You can choose the spacing by placing the number of spaces inside the `JsonDB` class, the `default being: 0`

```js
const db = new JsonDB(2); // Additional spacing
```

>You can also choose between a `json` storing `"base64"` or `"utf-8"` which is the default.

```js
const db = new JsonDB(0, "utf-8"); // Optional encoding
```

>The third parameter is responsible for managing your `json` file that will be defined in the `"path"` method. If there is no file with the listed name, it can create the file automatically if `"true"` is passed. The default is `"false"`

```js
const db = new JsonDB(0, "utf-8", true); // Optional to create file if it doesn't exist
```

__path__ is the main method that will provide the methods to manipulate your `json` file, but it is necessary that the file path is based on the root route of your project.

## Methods

*  **[Get](#get) | [Set](#set) | [Add](#add) | [Sub](#sub) | [Delete](#delete) | [Clear](#clear) | [Fetch](#fetch) | [HostView](#hostview)** 👈

### GET

Pass the *"key"* that you want to search for, if no parameter is passed it will return your `json` file. The __get__ search system is superficial, if you want to search for a *"key"* that is inside a method it will be necessary to use the `fetch` method.

```json
// example json
{
  "KeyExample": {"velueExamples": [0, "1", [2, 2.5]]},
  "KeyExample1": 3,
}
```

```js
console.log(db.path("./dir").get())
// db.path("./dir").get("KeyExample") To search for a specific item
```

#### Result `exemplo`

```json
{
  "KeyExample": {"velueExamples": [0, "1", [2, 2.5]]},
  "KeyExample1": 3,
}
```
* **[Methods](#methods)** 👈

#

### SET

Pass the *"key"* of your choice and the *"value"*.

```json
// example json
{}
```

```js
db.path("./dir").set("key", "value"); // Criando por parametro.
db.path("./dir").set({"key1": "value"}); // Formatação objeto.
db.path("./dir").set({"key2": "value", "key3": "value"}); // Formatação com objetos.
```

#### Result `exemplo`

```json
{
  "key": "value", // Criando por parametro.
  "key1": "value", // Formatação com objeto.
  "key2": "value", // Formatação com objetos.
  "key3": "value", // Formatação com objetos.
}
```

* **[Methods](#methods)** 👈

# 

### ADD

Its function is to add *"value"* to the value of *"key"* if the value is of numeric type.

```json
// example json
{
  "test": 120,
}
```

```js
db.path("./dir").add("key", 50);
```

#### Result `exemplo`

```json
{
  "test": 170
}
```

* **[Methods](#methods)** 👈

#

### SUB

Subtracts the specified *"value"* from the value of *"key"* if the value is numeric.

```json
// example json
{
  "test": 120,
}
```

```js
db.path("./dir").sub("key", 50);
```

#### Result `exemplo`

```json
{
  "test": 70
}
```

* **[Methods](#methods)** 👈

#

### DELETE

Pass the *"key"* you want to delete.

```json
// example json
{
  "keyExample": "wow",
  "KeyExample1": 8,
}
```

```js
db.path("./dir").delete("keyExample");
```

#### Result `exemplo`

```json
{
  //keyExample is deleted
  "KeyExample1": 8,
}
```
* **[Methods](#methods)** 👈

#

### CLEAR

Clears all json content, leaving it ready for new values.

```json
// example json
{
  "test": 120,
}
```

```js
db.path("./dir").clear();
```

#### Result `exemplo`

```json
{} // Empty
```

* **[Methods](#methods)** 👈

#

### FETCH

#### No support for `Base64`

Pass the *"key"* to search within the json. By default, everything found with the same *"key"* will be returned.

```json
// example json
{
  "test": 120,
  "mm": 60,
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {
          "mm": 10
        },
        {
          "mm": 11
        },
        {
          "mm": 12
        }
      ]
    }
  }
}
```

#### Methods

* **[Methods](#methods)** 👈
* **[Get](#get-1) | [Set](#set-1) | [Add](#add-1) | [Sub](#sub-1) | [Clear](#clear-1) | [Mapper](#mapper)** 👈

#

#### Get

Returns in an array all the values ​​of the *"keys"* found. When passing the value of a key in the parameter, that key will be returned if it exists.

```js
console.log(db.path("./dir").fetch("mm").get());
console.log(db.path("./dir").fetch("mm").get(11));
```

#### Result `exemplo`

```log
[ 60, 10, 11, 12 ]
[ 11 ]
```

* **[Methods](#methods-1)** 👈

#

#### Set

Accepts values ​​as string, number, arrays and object. Changes the value of all *"keys"* it finds for the key selected in *"fetch"*.

```js
db.path("./dir").fetch("mm").set("20:)");
```

#### Result `exemplo`

```json
{
  "test": 120,
  "mm": "20:)", // set "20:)"
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {
          "mm": "20:)" // set "20:)"
        },
        {
          "mm": "20:)" // set "20:)"
        },
        {
          "mm": "20:)" // set "20:)"
        }
      ]
    }
  }
}
```

* **[Methods](#methods-1)** 👈

#

#### Add

Its function is to add *"value"* to the values ​​of *"key"* if the value is of numeric type.

```js
db.path("./dir").fetch("mm").add(50);
```

#### Result `exemplo`

```json
{
  "test": 120,
  "mm": 110, // add 50
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {
          "mm": 60 // add 50
        },
        {
          "mm": 61 // add 50
        },
        {
          "mm": 62 // add 50
        }
      ]
    }
  }
}
```

* **[Methods](#methods-1)** 👈

#

#### Sub

Its function is to subtract *"value"* from the values ​​of *"key"* if the value is of a numeric type.

```js
db.path("./dir").fetch("mm").sub(50);
```
#### Result `exemplo`
```json
{
  "test": 120,
  "mm": 10, // sub 50
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {
          "mm": -40 // sub 50
        },
        {
          "mm": -41 // sub 50
        },
        {
          "mm": -42 // sub 50
        }
      ]
    }
  }
}
```

* **[Methods](#methods-1)** 👈

#

#### Clear

Used to delete *"key"* from **"json file"**.

```js
db.path("./dir").fetch("mm").clear();
```

#### Result `exemplo`

```json
{
  "test": 120,
  // removed
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {}, // removed
        {}, // removed
        {} // removed
      ]
    }
  }
}
```

* **[Methods](#methods-1)** 👈

#

#### Mapper

Use it to manipulate your **"json file"** however you like.

* __obj__ is the first parameter and provides as an object the methods where the *"key"* is located.
* __keys__ being the second parameter, providing the *"key"* that will be manipulated.

>Structure: (obj: object, keys: string) => callback(obj, keys);

```js
db.path("./dir").fetch("mm").mapper((obj, keys) => { if(obj[keys] === 12) delete obj[keys] })
```

#### Result `exemplo`

```json
{
  "test": 120,
  "mm": 60,
  "obj": {
    "mj": 0,
    "se": {
      "test": [
        {
          "mm": 10
        },
        {
          "mm": 11
        },
        {} // deleted
      ]
    }
  }
}
```

* **[Methods](#methods-1)** 👈

#

### HOSTVIEW

To create a server with your **"json file"**

* The `"port"` method is responsible for listing the server port.
* The `"update"` method allows when the page is reloaded to update the information based on the *"json file"*.
* The `"update"` is optional and the default is `"false"`

```js
db.path("./test.json").hostView({ port: 3000, update: true })
```

"hostView" has two methods, `"on"` and `"start"`.

>The "on" method is responsible for performing manipulations on the "read" and "request" events.

The `"read"` event is fired when the server is started, the `"request"` event is fired every time the server is accessed, such as when reloading the page or opening it for the first time.

### Object made available by the event `"read"`

```json
{
  "settings": {
    "port": Number,
    "update": Boolean
  }
}
```

* __port__ - Refers to the door chosen by you to the server.
* __update__ - To indicate if the server will be updating the page.

### Object made available by the event `"request"`

```json
{
  "url": String,
  "method": String,
  "ip": Number 
}

```
* __url__ - The route used to display `"JSON"`.
* __method__ - The requisition method that was made on the server.
* __ip__ - It is the `"IP"` of the device that accessed the server on the **"json file"** route.

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

server.start() // Server initialization
```

#### Result `exemplo`

```log
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

#### Result `exemplo`

```log
# URL in your browser | example

http://192.168.0.22:3000

```

* **[Methods](#methods)** 👈

# 
