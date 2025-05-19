const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json()); // Middleware para leer JSON

// Lista de productos
let products = [
  { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
  { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
  { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
  { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
  { id: 5, nombre: 'Skin Valorant', precio: 120 },
  { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

//  Crear un nuevo producto
app.post('/products', (req, res) => {
  const nuevoProducto = req.body;

  if (!nuevoProducto.id || !nuevoProducto.nombre || !nuevoProducto.precio) {
    return res.status(400).send("Faltan datos del producto");
  }

  products.push(nuevoProducto);
  res.send('Producto creado exitosamente');
});

// Mostrar todos los productos
app.get('/products', (req, res) => {
  res.json({
    description: 'Productos',
    items: products
  });
});

// Actualizar un producto por ID
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id); // Obtenemos el ID desde la URL
  const datosActualizados = req.body; // Recogemos el nuevo contenido del producto

  // Buscamos el producto con ese ID
  const index = products.findIndex(producto => producto.id === id);

  if (index === -1) {
    return res.status(404).send('Producto no encontrado');
  }

  // Actualizamos los datos
  products[index] = { ...products[index], ...datosActualizados };

  res.send('Producto actualizado correctamente');
});

// Eliminar un producto por ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id); // ID desde la URL

  // Buscar si existe
  const index = products.findIndex(producto => producto.id === id);

  if (index === -1) {
    return res.status(404).send('Producto no encontrado');
  }

  // Eliminar del array
  products.splice(index, 1);

  res.send('Producto eliminado correctamente');
});


//  Levantar servidor (esto siempre debe ir al final)
app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});g

