"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello world');
});
app.get('/bsm/', function (request, response) {
    response.send('Trabalho em equipe, atenção aos detalhes,proatividade,comunicação');
});
app.get('/bsm/objectives/', function (request, response) {
    response.send('Aprender a operar o workbench mySQL e manusear o banco de dados.');
});
app.listen(port, function () {
    console.log("Server is running at port".concat(port));
});
