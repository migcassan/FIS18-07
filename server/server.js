const { Mongoose } = require("./db");
const PRESUPUESTOS_APP_DIR = '/dist/presupuesto';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var BASE_API_PATH = "/api/v1";

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, PRESUPUESTOS_APP_DIR)));

var presupuestos = [
    { "nombre": "almuerzo director de sopra steria", "categoria": "dieta", "monto": "250" },
    { "nombre": "almuerzo director de everis", "categoria": "dieta", "monto": "270" }
]


app.get("/", (req, res) => {
    console.log(Date() + " - GET /presupuestos");
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    res.sendStatus(200);
});

app.get('*',function(req, res, next){
    res.sendFile(path.resolve(path.join(__dirname, PRESUPUESTOS_APP_DIR,'/index.html')));
});
/**
app.get("/login", (req, res) => {
    console.log(Date() + " - GET /login");
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    res.sendStatus(200);
});

app.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /main");
    res.sendStatus(200);

}); */

app.get(BASE_API_PATH + "/presupuestos", (req, res) => {

    console.log(Date() + " - GET /presupuestos");

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