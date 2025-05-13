
const express = require('express'); //importar express
const app = express(); //inizialicar express

//poder recibir json
app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Cargar rutas
const hello_routes = require("./routes/hello");
const task_routes = require("./routes/task");


//rutas base
app.use("/api", hello_routes);
app.use("/api", task_routes);
module.exports = app;