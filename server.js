require("./db");
const PRESUPUESTOS_APP_DIR = '/dist/presupuesto';

const rtsIndex = require('./indexRouter');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var BASE_API_PATH = "/api/v1";

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(BASE_API_PATH, rtsIndex);

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

app.get("/login", (req, res) => {
    console.log(Date() + " - GET /login");
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
}); 

app.get("/signup", (req, res) => {
    console.log(Date() + " - GET /singup");
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
});

app.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /main");
});

app.get(BASE_API_PATH + "/presupuestos", (req, res) => {
    console.log(Date() + " - GET /presupuestos");
    res.send(presupuestos);
});

app.post(BASE_API_PATH + "/presupuestos", (req, res) => {
    console.log(Date() + " - POST /presupuestos");
    // res.send(__dirname);
    presupuestos.push(req.body);
    res.sendStatus(201);
});

module.exports.app = app;