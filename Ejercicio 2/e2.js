// 1️ Importamos Express
const express = require('express');

// 2️ Inicializamos la aplicación
const app = express();

// 3️ Definimos el puerto
const puerto = 3000;

// 4️ Middleware opcional para poder trabajar con JSON
app.use(express.json());

// 5️ Rutas

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenida al sitio');
});

// Rutas para productos
app.get('/productos', (req, res) => {
  res.send('Listado de productos');
});

app.post('/productos', (req, res) => {
  res.send('Crear un producto');
});

app.put('/productos', (req, res) => {
  res.send('Actualizar un producto');
});

app.delete('/productos', (req, res) => {
  res.send('Borrar un producto');
});

// Rutas para usuarios
app.get('/usuarios', (req, res) => {
  res.send('Listado de usuarios');
});

app.post('/usuarios', (req, res) => {
  res.send('Crear un usuario');
});

app.put('/usuarios', (req, res) => {
  res.send('Actualizar un usuario');
});

app.delete('/usuarios', (req, res) => {
  res.send('Borrar un usuario');
});

// 6️ Levantamos el servidor
app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});
