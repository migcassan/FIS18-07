require("./db");
require('./passportConfig');
const morgan = require('morgan');
const PRESUPUESTOS_APP_DIR = '/dist/presupuesto';
const rtsIndex = require('./indexRouter');
const passport = require('passport');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var BASE_API_PATH = "/api/v1";
var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(BASE_API_PATH, rtsIndex);
app.use(express.static(path.join(__dirname, PRESUPUESTOS_APP_DIR)));

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else {
        console.log(err);
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /presupuestos");
    res.sendStatus(200);
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /login");
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /singup");
});

app.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, PRESUPUESTOS_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /main");
});

module.exports.app = app;