console.log(" Hola Elida, el archivo se está ejecutando...");

// 1️ Importamos el módulo express
const express = require('express');

// 2️ Inicializamos express en una variable llamada app
const app = express();

// 3️ Definimos el puerto que usará el servidor
const puerto = 3000;

// 4️ Levantamos el servidor y mostramos el mensaje
app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});
