//Requires (Librerias)
var express = require('express');

var mongoose = require('mongoose');

//Inicializar las variables
var app = express();

//Conexiones
mongoose.connection.openUri('mongodb://localhost:27017/adminproDB', (error, response) => {
    if (error) {
        throw error
    } else {
        console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online')
    }
});

//Rutas
app.get('/', (request, response, next) => {

    response.status(200).json({
        ok: true,
        message: 'Petición realizada con éxito'
    })

})

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Servidor express corriendo en el puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});