const PRESUPUESTOS_APP_DIR = '/dist/presupuesto';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, PRESUPUESTOS_APP_DIR)));

var presupuestos = [
    { "nombre": "almuerzo director de sopra steria", "categoria": "dieta", "monto": "250" },
    { "nombre": "almuerzo director de everis", "categoria": "dieta", "monto": "270" }
]


app.get("/", (req, res) => {    
    console.log(Date() + " - GET /presupuestos");
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    res.sendStatus(200);
});

app.get(BASE_API_PATH + "/presupuestos", (req, res) => {

    console.log(Date() + " - GET /presupuestos");

    // res.send(__dirname);
    res.send(presupuestos);
    res.sendStatus(200);
});

app.post(BASE_API_PATH + "/presupuestos", (req, res) => {

    console.log(Date() + " - POST /presupuestos");

    // res.send(__dirname);
    presupuestos.push(req.body);
    res.sendStatus(201);

});

module.exports.app = app;