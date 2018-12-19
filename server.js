var express = require('express');
var BASE_API_PATH = "/api/v1";
var app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1>My server</h1></body></html>");
});

app.get(BASE_API_PATH + "/contacts", (req, res) => {

    console.log(Date() + " - GET /contacts");

    res.send(__dirname);

});

module.exports.app = app;