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

// Filtro por precio exacto
app.get('/products/filter', (req, res) => {
  const precio = parseInt(req.query.precio); // capturamos el valor de la query ?precio=

  if (isNaN(precio)) {
    return res.status(400).send('Precio no válido');
  }

  const resultado = products.filter(producto => producto.precio === precio);

  res.json({
    description: `Productos con precio ${precio}`,
    items: resultado
  });
});

// Filtro por rango de precios (entre 50 y 250)
app.get('/products/rango', (req, res) => {
  const resultado = products.filter(producto => producto.precio >= 50 && producto.precio <= 250);

  res.json({
    description: 'Productos con precio entre 50 y 250',
    items: resultado
  });
});

// Buscar producto por ID
app.get('/products/id/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const producto = products.find(p => p.id === id);

  if (!producto) {
    return res.status(404).send('Producto no encontrado');
  }

  res.json(producto);
});

// Buscar producto por nombre (query string)
app.get('/products/nombre', (req, res) => {
  const nombre = req.query.nombre?.toLowerCase();

  const resultado = products.filter(producto =>
    producto.nombre.toLowerCase().includes(nombre)
  );

  if (resultado.length === 0) {
    return res.status(404).send('Producto no encontrado');
  }

  res.json(resultado);
});

//  Levantar servidor (esto siempre debe ir al final)
app.listen(puerto, () => {
  console.log(`Servidor levantado en el puerto ${puerto}`);
});

