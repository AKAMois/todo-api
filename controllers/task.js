//importar el modelo creado
const Task = require("../models/task");

//crear funcion que se ocupe de crear una nueva tarea
//asincrona tiene que ser porque se tenen que completar ciertas cosas antes de guardar la tearea o ver si no se ha guardado
async function createTask(req, res){
    const task = new Task(); //creando una nueva tarea con nuestro modelo
    const params = req.body; //const parametros que llegan por request

    //asignar a task el titulo y la descripcion
    task.title = params.title;
    task.description = params.description;

    try { //guardar tarea
        const taskStore = await task.save() //await porque hay que esperar a que se complete todo antes de seguir
        
        if(!taskStore) {
            res.status(400).send({msg: "No se ha guardado la tarea"});
        } else{
            res.status(200).send({task: taskStore});
        }

    } catch (error) { //si diese error
        res.status(500).send(error)
    }

}

async function getTasks(req, res) {
    try {
        const tasks = await Task.find({completed: false}).sort({created_at: -1});//guardar todas las tareas que encuentre el servidor

        if(!tasks) {
            res.status(400).send({msg: "Error al obtener las tareas"})
        } else{
            res.status(200).send(tasks);
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

async function getTask(req, res) {
    const idTask = req.params.id;

    try {
        const task = await Task.findById(idTask);

        if(!task){
            res.status(400).send({msg: "no se ha encontrado la tarea"})
        }else{
            res.status(200).send(task);
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateTask(req, res) {
    const idTask = req.params.id;
    const params = req.body;
    
    try {
        const task = await Task.findByIdAndUpdate(idTask, params);
        if(!task){
            res.status(400).send({msg: "No se ha podidio actualizar la tarea"})
        }else{
            res.status(200).send({msg: "Actualizacion completada"})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function deleteTask(req, res) {
   const idTask = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(idTask);

    if (!task) {
            res.status(400).send({msg: "No se ha podido eliminar la tarea"})
        } else {
            res.status(200).send({msg: "Se ha eliminado la tarea"})
        }

   } catch (error) {
    res.status(500).send(error)
   }
}

//exportamos la funcion
module.exports = {
    createTask, 
    getTasks,
    getTask,
    updateTask,
    deleteTask,
};