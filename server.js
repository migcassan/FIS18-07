var express = require('express');

var app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1>My server</h1></body></html>");
});

module.exports.app = app;