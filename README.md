 🚀 Proyecto ExpressJS - Ejercicios Backend

Este proyecto contiene tres ejercicios desarrollados con **Node.js** y **Express**, organizados por carpetas. Cada ejercicio corresponde a una práctica de rutas, endpoints y manejo de datos desde un servidor backend.

---

## 📁 Estructura del proyecto

```
Ejercicio-EXPRESSJS/
├── Ejercicio 1/
│   └── e1.js
├── Ejercicio 2/
│   └── e2.js
├── Ejercicio 3/
│   └── e3.js
├── package.json
├── node_modules/
```

---

## 📘 Ejercicio 1

### ✅ Objetivo:
Levantar un servidor básico con Express.

### 📄 Archivo: `e1.js`

- Usa `express()`
- Levanta servidor en el puerto 3000
- Muestra en consola:  
  ```
  Servidor levantado en el puerto 3000
  ```

---

## 📘 Ejercicio 2

### ✅ Objetivo:
Crear múltiples rutas usando diferentes métodos HTTP.

### 📄 Archivo: `e2.js`

### 🧪 Endpoints creados:

| Ruta        | Método | Respuesta                      |
|-------------|--------|-------------------------------|
| `/`         | GET    | Bienvenida al sitio            |
| `/productos`| GET    | Listado de productos           |
| `/productos`| POST   | Crear un producto              |
| `/productos`| PUT    | Actualizar un producto         |
| `/productos`| DELETE | Borrar un producto             |
| `/usuarios` | GET    | Listado de usuarios            |
| `/usuarios` | POST   | Crear un usuario               |
| `/usuarios` | PUT    | Actualizar un usuario          |
| `/usuarios` | DELETE | Borrar un usuario              |

---

## 📘 Ejercicio 3

### ✅ Objetivo:
Manejo de productos en JSON y creación de filtros.

### 📄 Archivo: `e3.js`

### 🧪 Funcionalidades:

- Mostrar todos los productos (`GET /products`)
- Crear nuevo producto (`POST /products`)
- Actualizar producto por ID (`PUT /products/:id`)
- Eliminar producto por ID (`DELETE /products/:id`)

### 🔍 Filtros creados:

| Filtro                   | Método | Ruta                                       |
|--------------------------|--------|--------------------------------------------|
| Precio exacto            | GET    | `/products/filter?precio=100`              |
| Precio entre 50 y 250    | GET    | `/products/rango`                          |
| Buscar por ID            | GET    | `/products/id/:id`                         |
| Buscar por nombre        | GET    | `/products/nombre?nombre=valorant`         |

---

## 🧰 Requisitos para ejecutar

1. Tener Node.js instalado
2. Ejecutar en terminal:

```bash
cd Ejercicio-EXPRESSJS
npm install
node Ejercicio\ 1/e1.js      # Para ejercicio 1
node Ejercicio\ 2/e2.js      # Para ejercicio 2
node Ejercicio\ 3/e3.js      # Para ejercicio 3
```

---

## 📦 Dependencias

- [express](https://www.npmjs.com/package/express)

---

## ✍️ Autor

**Elida Rodriguez**  
Desarrolladora web en formación 💻
