const express = require('express'); //importamos express
const TaskController = require('../controllers/task'); //traemos el controlador

//inicializamos la api
const api = express.Router();


api.post("/task", TaskController.createTask);//crear ruta para crear tareas (metodo POST)
api.get("/task", TaskController.getTasks); //obtener tareas
api.get("/task/:id", TaskController.getTask); //obtenerla por id
api.put("/task/:id", TaskController.updateTask); //actualizar tarea (necesito el id de la tarea para saber cual actualizar)
api.delete("/task/:id",TaskController.deleteTask) //eliminar una tarea


//exportamos
module.exports = api;
