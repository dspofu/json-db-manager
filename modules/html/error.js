"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlError = void 0;
const htmlError = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: rgb(232, 232, 232);
      text-align: center;
    }

    .container {
      margin-top: 25vh;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.323);
      border-radius: 12px;
      box-shadow: 0px 0px 12px 12px rgb(0 0 0 / 20%);
    }

    h1 { color: #ff0000; }

    a { text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Erro 404</h1>
    <p>Opss! The page you are looking for was not found</p><img
      src="\\image" width="20%" alt="Image is not found">
    <p><a href="/data">Return to home page</a></p>
  </div>
</body>
</html>`;
exports.htmlError = htmlError;
//# sourceMappingURL=error.js.map