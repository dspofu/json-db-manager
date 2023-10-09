"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlError = void 0;
const htmlError = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
</head>
<style>
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: rgb(232, 232, 232);
        text-align: center;
    }

    .error-container {
        margin-top: 100px;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.323);
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    h1 { color: #ff0000; }
</style>
</head>
<body>
<div class="error-container">
    <h1>Erro 404</h1>
    <p>Sorry, the page you are looking for was not found.</p>
    <p><a href="/data">Return to home page</a></p>
</div>
</body>
</html>`;
exports.htmlError = htmlError;
//# sourceMappingURL=error.js.map