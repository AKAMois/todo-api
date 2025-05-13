const mongoose = require("mongoose"); // Importamos mongoose para conectarnos a MongoDB
const app = require("./app"); // Importamos la aplicación principal
const port = process.env.PORT || 3979; // Añadimos el puerto en una variable
const urlMongoAtlas =
  "mongodb+srv://god:godgodgod@taskdb.p9glwvt.mongodb.net/?retryWrites=true&w=majority&appName=taskdb"; // URL de conexión a MongoDB Atlas

// Creamos una función async para manejar la conexión a la base de datos y levantar el servidor
async function startServer() {
  try {
    // Intentamos conectarnos a MongoDB
    await mongoose.connect(urlMongoAtlas);
    console.log("La conexión a la base de datos es correcta"); // Si la conexión es correcta, mostramos este mensaje

    // Si la conexión fue exitosa, levantamos el servidor
    app.listen(port, () => {
      console.log("Servidor levantado en http://localhost:" + port); // Confirmamos que el servidor está corriendo
    });
  } catch (error) {
    // En caso de error en la conexión, lo mostramos en consola
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Llamamos a la función para iniciar el proceso
startServer();
