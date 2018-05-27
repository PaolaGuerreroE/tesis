
'use strict';
var express = require('express');
var app = express();
const Graph = require('node-dijkstra');


function calcula_ruta(idinicio,idfinal){
    var route = new Graph();
    route.addNode("1", { 2: 1262 });
    route.addNode("2", { 3: 1158, 118: 534 });
    route.addNode("3", { 4: 973 });
    route.addNode("4", { 5: 501 });
    route.addNode("5", { 6: 645 });
    route.addNode("6", { 7: 793 });
    route.addNode("7", { 8: 409 });
    route.addNode("8", { 9: 458, 52: 665 });
    route.addNode("9", { 10: 445, 104: 1295 });
    route.addNode("10", { 11: 382 });
    route.addNode("11", { 12: 745, 34: 817 });
    route.addNode("12", { 13: 698 });
    route.addNode("13", { 14: 866, 70: 633 });
    route.addNode("14", { 15: 478, 69: 1296 });
    route.addNode("15", { 16: 703 });
    route.addNode("16", { 17: 595 });
    route.addNode("17", { 18: 611 });
    route.addNode("18", { 19: 762 });
    route.addNode("19", { 20: 1320 });
    route.addNode("20", { 73: 1644, 124: 1409,19:1320});
    route.addNode("21", { 22: 1639 });
    route.addNode("22", { 23: 1416 });
    route.addNode("23", { 24: 637, 94: 1433 });
    route.addNode("24", { 25: 620 });
    route.addNode("25", { 26: 462 });
    route.addNode("26", { 27: 516 });
    route.addNode("27", { 28: 657 });
    route.addNode("28", { 29: 537 });
    route.addNode("29", { 30: 587 });
    route.addNode("30", { 31: 447, 51: 251 });
    route.addNode("31", { 32: 387, 103: 1402 });
    route.addNode("32", { 33: 602 });
    route.addNode("33", { 11: 745 });
    route.addNode("34", { 35: 642 });
    route.addNode("35", { 36: 774, 106: 812, 71: 717 });
    route.addNode("36", { 37: 490 });
    route.addNode("37", { 38: 698 });
    route.addNode("38", { 39: 750 });
    route.addNode("39", { 40: 924 });
    route.addNode("40", { 41: 748 });
    route.addNode("41", { 42: 838, 153: 1805 });
    route.addNode("42", { 43: 1330 });
    route.addNode("43", { 42: 1330 });
    route.addNode("45", { 46: 1166 });
    route.addNode("46", { 90: 570, 47: 966, 45: 1166 });
    route.addNode("47", { 48: 1106 });
    route.addNode("48", { 49: 1445, 80: 975 });
    route.addNode("49", { 50: 1042 });
    route.addNode("50", { 30: 702, 148: 521 });
    route.addNode("51", { 8: 659 });
    route.addNode("52", { 53: 559 });
    route.addNode("53", { 54: 653 });
    route.addNode("54", { 55: 1119, 119: 1738 });
    route.addNode("55", { 56: 950 });
    route.addNode("56", { 57: 715 });
    route.addNode("57", { 58: 794 });
    route.addNode("58", { 59: 1153, 151: 563 });
    route.addNode("59", { 60: 908 });
    route.addNode("60", { 61: 824 });
    route.addNode("61", { 62: 1295 });
    route.addNode("62", { 63: 1306 });
    route.addNode("63", { 62: 1306 });
    route.addNode("64", { 65: 1129 });
    route.addNode("65", { 66: 959 });
    route.addNode("66", { 67: 645 });
    route.addNode("67", { 68: 884, 78: 679 });
    route.addNode("68", { 69: 910 });
    route.addNode("69", { 146: 498, 13: 1062 });
    route.addNode("70", { 71: 1033 });
    route.addNode("71", { 72: 758, 120: 1135 });
    route.addNode("73", { 74: 1153 });
    route.addNode("74", { 75: 1174 });
    route.addNode("75", { 76: 1219, 144: 809 });
    route.addNode("76", { 77: 860 });
    route.addNode("77", { 67: 815 });
    route.addNode("78", { 79: 969 });
    route.addNode("79", { 48: 892 });
    route.addNode("80", { 81: 1067 });
    route.addNode("81", { 82: 1188, 89: 1258 });
    route.addNode("82", { 81: 1188 });
    route.addNode("83", { 84: 1257, 91: 1615 });
    route.addNode("84", { 85: 973 });
    route.addNode("85", { 86: 1173 });
    route.addNode("86", { 87: 1072 });
    route.addNode("87", { 88: 660 });
    route.addNode("88", { 81: 755 });
    route.addNode("89", { 46: 1075 });
    route.addNode("90", { 64: 1141 });
    route.addNode("91", { 92: 1402 });
    route.addNode("92", { 93: 952 });
    route.addNode("93", { 23: 1295 });
    route.addNode("94", { 95: 1163 });
    route.addNode("95", { 96: 812 });
    route.addNode("96", { 97: 1430 });
    route.addNode("97", { 2: 1005 });
    route.addNode("98", { 99: 606 });
    route.addNode("99", { 100: 788 });
    route.addNode("100", { 101: 1476, 149: 651 });
    route.addNode("101", { 100: 1476 });
    route.addNode("102", { 31: 1615, 50: 757 });
    route.addNode("103", { 9: 952 });
    route.addNode("104", { 105: 1433 });
    route.addNode("105", { 35: 1163});
    route.addNode("106", { 72: 1430 });
    route.addNode("72", { 107: 1005 });
    route.addNode("107", { 108: 1084 });
    route.addNode("108", { 109: 606 });
    route.addNode("109", { 110: 788 });
    route.addNode("110", { 111: 1476 });
    route.addNode("111", { 112: 1084 });
    route.addNode("112", { 113: 606, 154: 1671 });
    route.addNode("113", { 114: 788 });
    route.addNode("114", { 115: 1476 });
    route.addNode("115", { 116: 1476 });
    route.addNode("116", { 115: 1476 });
    route.addNode("117", { 2: 910 });
    route.addNode("118", { 54: 789 });
    route.addNode("119", { 35: 732 });
    route.addNode("120", { 121: 1137 });
    route.addNode("121", { 122: 1137 });
    route.addNode("122", { 123: 1137 });
    route.addNode("123", { 20: 1137 });
    route.addNode("124", { 125: 1093 });
    route.addNode("125", { 126: 1456 });
    route.addNode("126", { 127: 1161 });
    route.addNode("127", { 128: 2206 });
    route.addNode("128", { 129: 1379 });
    route.addNode("129", { 130: 1100 });
    route.addNode("130", { 131: 1783 });
    route.addNode("131", { 132: 1956 });
    route.addNode("132", { 131: 1956 });
    route.addNode("133", { 134: 574 });
    route.addNode("134", { 135: 709 });
    route.addNode("135", { 136: 596 });
    route.addNode("136", { 137: 1485 });
    route.addNode("137", { 138: 1155 });
    route.addNode("138", { 139: 436 });
    route.addNode("139", { 140: 1393 });
    route.addNode("140", { 141: 1335 });
    route.addNode("141", { 142: 784 });
    route.addNode("142", { 143: 1165 });
    route.addNode("143", { 75: 863 });
    route.addNode("144", { 145: 908 });
    route.addNode("145", { 14: 907 });
    route.addNode("146", { 147: 611 });
    route.addNode("147", { 102: 474 });
    route.addNode("148", { 50: 521 });
    route.addNode("149", { 150: 725 });
    route.addNode("150", { 58: 450 });
    route.addNode("151", { 152: 1280 });
    route.addNode("152", { 41: 895 });
    route.addNode("153", { 112: 1922 });
    route.addNode("154", { 155: 990 });
    route.addNode("155", { 156: 1060 });
    route.addNode("156", { 157: 906 });
    route.addNode("157", { 158: 1111 });
    route.addNode("158", { 159: 1545 });
    route.addNode("159", { 160: 490 });
    route.addNode("160", { 161: 1360 });
    route.addNode("161", { 162: 1276 });
    route.addNode("162", { 163: 1115 });
    route.addNode("163", { 164: 1298 });
    var response = route.path(idinicio, idfinal);
    console.log('esta es la respuesta', response);
    return response;
}


app.get('/', function (req, res) {
    res.send("Hola bonita!");   
});


app.get('/api/reporte/:idestacion&:idseveridad', function (req, res) {
    var idestacion = req.params.idestacion;
    var idseveridad = req.params.idseveridad;

    res.send('Hola Pao');
});

app.get('/api/ruta/:idinicio&:idfinal', function (req, res) {
    var idinicio = req.params.idinicio;
    var idfinal = req.params.idfinal;
    var res = new Promise (function(resolve, reject) {
        var result = calcula_ruta(idinicio,idfinal);
        if (error) reject(error);
        else resolve(result);
    }).then(function(result){
        console.log(result);
        rest.send(result)
    });
});

app.listen( process.env.PORT, function () {
    console.log('Example app listening on port !', process.env.PORT);
});

/*
app.listen(3000, function () {
    console.log('Example app listening on port !', process.env.PORT);
});*/
