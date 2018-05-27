
'use strict';
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');
var route = new Graph();



app.get('/', function (req, res) {

    route.addNode('A', { B: 1 });
    route.addNode('B', { A: 1, C: 2, D: 4 });
    route.addNode('C', { B: 2, D: 1 });
    route.addNode('D', { C: 1, B: 4 });

    var response = route.path('A', 'D');

    res.send('Hello World!',response);
});


app.get('/api/reporte/:idestacion&:idseveridad', function (req, res) {
    var idestacion = req.params.idestacion;
    var idestacion = req.params.idseveridad;

    res.send('Hola Pao');
});

app.get('/api/ruta/:idestacion&:idseveridad', function (req, res) {
    var idestacion = req.params.idestacion;
    var idestacion = req.params.idseveridad;

    res.send('Hola Pao');
});
app.listen(process.env.PORT, function () {
    console.log('Example app listening on port !', process.env.PORT);
});
