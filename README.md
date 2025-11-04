# 🚀 Servidor REST Básico con Express

Este proyecto es una implementación básica de un servidor REST utilizando Node.js y el *framework* Express. Fue creado con el propósito de **entender, construir y experimentar** con diferentes tipos de peticiones HTTP (CRUD), manejo de parámetros (URL, Query, Body) y respuestas con códigos HTTP estándar.

## 📋 Requisitos

* [Node.js](https://nodejs.org/) (versión 14 o superior)
* [npm](https://www.npmjs.com/) (Administrador de paquetes de Node.js)

## 📦 Instalación y Ejecución

Sigue estos pasos para configurar y arrancar el servidor:

### 1. Inicializar el Proyecto

Abre tu terminal, navega a la carpeta del proyecto y ejecuta:

```bash
npm init -y
````

### 2\. Instalar Dependencias

Instala el *framework* Express:

```bash
npm install express
```

### 3\. Ejecutar el Servidor

Asegúrate de que el código del servidor esté guardado en el archivo `server.js` (o `index.js`) y ejecútalo con Node:

```bash
node server.js
```

El servidor estará activo y escuchando peticiones en el puerto `3000`.

```
🚀 Servidor Express escuchando en http://localhost:3000
```

-----

## 🧭 Rutas del API (Endpoints)

El servidor implementa las siguientes rutas para demostrar el manejo de peticiones HTTP, parámetros y códigos de respuesta:

### A. Operaciones CRUD Básicas

| Método | Ruta | Uso de Parámetros | Código HTTP | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/saludo` | N/A | `200 OK` | Retorna un saludo simple en JSON. |
| **POST** | `/usuario` | `req.body` (JSON) | `201 Created` | Crea un nuevo recurso. **Valida** que existan `nombre` y `email`. |
| **PUT** | `/usuario/:id` | `req.params` y `req.body` | `200 OK` | Actualiza un usuario específico por su ID. |
| **DELETE**| `/usuario/:id` | `req.params` | `200 OK` | Elimina un usuario. Si `id` es **'999'**, simula un error `500`. |

### B. Manejo de Parámetros

| Método | Ruta | Uso de Parámetros | Código HTTP | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/productos/:cat/:nombre` | `req.params` | `200 OK` | Demuestra cómo capturar valores directamente de la URL. |
| **GET** | `/buscar?q=...&...` | `req.query` | `200 OK` | Demuestra la captura de parámetros opcionales después del `?`. |

-----

## 🚥 Códigos de Respuesta

El servidor utiliza los siguientes códigos HTTP para indicar el estado de la petición, cumpliendo con los estándares REST:

  * `200 OK`: Éxito en la operación (GET, PUT, DELETE).
  * `201 Created`: Éxito en la creación del recurso (POST).
  * **`400 Bad Request`**: Error de validación (Ej: No se envió el nombre en el POST).
  * `404 Not Found`: Si la ruta solicitada no está definida en el servidor.
  * `500 Internal Server Error`: Errores de servidor simulados (Ej: al intentar eliminar el ID 999).

## 🧪 Cómo Probar

Se recomienda usar herramientas cliente como **Postman**, **Insomnia** o la línea de comandos (**cURL**) para probar las rutas POST, PUT y DELETE.

### Ejemplo de Prueba POST (Creación):

```bash
# Ejemplo con cURL para crear un usuario
curl -X POST http://localhost:3000/usuario \
     -H "Content-Type: application/json" \
     -d '{"nombre": "Alice", "email": "alice@ejemplo.com"}'
```
