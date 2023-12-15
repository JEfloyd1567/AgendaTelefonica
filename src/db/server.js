const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contactoController = require('../controllers/contactoController.js');
const Contacto = require('../models/contacto.js'); // Importa el modelo de Contacto
const cors = require("cors");
const app = express();

app.use(cors());
// Configuración de bodyParser para analizar el cuerpo de las solicitudes HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de las rutas de la API
app.use('/api', contactoController); // Aquí se usa el controlador de rutas
//File(path.join(__dirname, 'public', 'index.html'))
// Configuración de la ruta principal para servir la aplicación React



// Inicio del servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
  // Prueba de conexión a la base de datos
  Contacto.findOne()
    .then(contacto => {
      console.log('Conexión a la base de datos exitosa. Primer contacto encontrado:', contacto);
    })
    .catch(error => {
      console.error('Error al conectar a la base de datos:', error);
    });
});
