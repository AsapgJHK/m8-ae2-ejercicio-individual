const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json()); 





app.get('/saludo', (req, res) => {
    // Código HTTP: 200 (OK)
    res.status(200).json({
        mensaje: "¡Hola! Bienvenido/a a la API REST de prueba.",
        codigo: 200
    });
});


app.post('/usuario', (req, res) => {
    const { nombre, email } = req.body;

    
    if (!nombre || !email) {
        
        return res.status(400).json({
            error: 'Faltan campos obligatorios.',
            detalles: 'Se requiere nombre y email en el cuerpo de la petición (JSON).'
        });
    }

    
    res.status(201).json({
        mensaje: 'Usuario creado exitosamente.',
        datos: req.body,
        codigo: 201
    });
});


app.put('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    
    res.status(200).json({
        mensaje: `Usuario con ID ${userId} actualizado.`,
        datos_enviados: req.body,
        codigo: 200
    });
});


app.delete('/usuario/:id', (req, res) => {
    const userId = req.params.id;

    
    if (userId === '999') {
        
        return res.status(500).json({
            error: 'Error interno simulado al intentar eliminar el ID 999.'
        });
    }

    
    res.status(200).json({
        mensaje: `Usuario con ID ${userId} eliminado correctamente.`,
        codigo: 200
    });
});


app.get('/productos/:categoria/:nombre', (req, res) => {
    const { categoria, nombre } = req.params; 

    res.status(200).json({
        mensaje: 'Parámetros recibidos por URL:',
        categoria_recibida: categoria,
        nombre_producto_recibido: nombre
    });
});


app.get('/buscar', (req, res) => {
    const queryParams = req.query; 

    if (!queryParams.q) {
        
        return res.status(400).json({
            error: 'Se requiere un parámetro de búsqueda "q" (ej: /buscar?q=computador).'
        });
    }

    res.status(200).json({
        mensaje: 'Parámetros recibidos por query string:',
        criterio_busqueda: queryParams.q,
        filtros_adicionales: queryParams,
        total_filtros: Object.keys(queryParams).length
    });
});


app.use((req, res) => {
    
    res.status(404).json({
        error: 'Ruta no encontrada.',
        mensaje: `La URL ${req.originalUrl} con el método ${req.method} no existe en este servidor.`
    });
});


app.listen(PORT, () => {
    console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
    console.log(`
    PRUEBAS SUGERIDAS:
    - GET: http://localhost:${PORT}/saludo (200)
    - GET: http://localhost:${PORT}/productos/electronica/laptop (req.params)
    - GET: http://localhost:${PORT}/buscar?q=telefono&marca=xiaomi (req.query)
    - POST: http://localhost:${PORT}/usuario (con body JSON) (201)
    - POST: http://localhost:${PORT}/usuario (sin body) (400 - Validación)
    - PUT: http://localhost:${PORT}/usuario/123 (req.params) (200)
    - DELETE: http://localhost:${PORT}/usuario/789 (req.params) (200)
    - DELETE: http://localhost:${PORT}/usuario/999 (Simulación de error) (500)
    - GET: http://localhost:${PORT}/ruta-inexistente (404)
    `);
});