"use strict";
/// <reference path="../typings/main.d.ts" />
const express = require("express");
var app = express();
var port = process.env.port || 8080;
app.get('/', function (req, res) {
    res.send('hello world!');
});
app.post('/login', function (req, res) {
});
app.listen(port, () => {
    console.log(`Server started at port https://localhost:${port}`);
});
//# sourceMappingURL=app.js.map