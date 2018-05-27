
'use strict';
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');
var route = new Graph();



app.get('/', function (req, res) {

    route.addNode(node1,{node2:1262});
    route.addNode(node2,{node3:1158,node118:534});
    route.addNode(node3,{node4:973});
    route.addNode(node4,{node5:501});
    route.addNode(node5,{node6:645});
    route.addNode(node6,{node7:793});
    route.addNode(node7,{node8:409});
    route.addNode(node8,{node9:458,node52:665});

    var response = route.path('node1', 'node8');
    console.log('esta es la respuesta',response)
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
