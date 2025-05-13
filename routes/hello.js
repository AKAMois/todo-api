const express = require('express'); //importar expressJS
//importar el controlador
const HelloController = require("../controllers/hello");

//inicializar sistema de rutas
const api = express.Router();

//crear primera ruta. Que del hellocontroller ejecute la funcion getHello
api.get("/hello", HelloController.getHello);

//exportar api
module.exports = api;
