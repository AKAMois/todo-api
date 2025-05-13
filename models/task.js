const { default: mongoose } = require('mongoose');
const moongose = require('mongoose'); //importar mongoose
//Inicializar el esquema
const Schema = moongose.Schema;

//crear nuestro schema
const TaskSchema = Schema({ //configuracion del schema
    //titulo
    title: {
        type: String,
        require: true,
    },
    //descripcion
    description: {
        type: String,
        require: true,
    },
    //saber si la tarea se ha completado
     completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    //saber cuando se a creado
    created_at: {
        type: Date,
        require: true,
        default: Date.now,
    },


})

//exportamos para usarlo
module.exports = mongoose.model("Task", TaskSchema);