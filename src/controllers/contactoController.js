
const express = require('express');
const bodyParser = require('body-parser');
const Contacto = require('../models/contacto.js');

const app = express();

app.use(bodyParser.json());


app.get('/contactos', (req, res) => {
    Contacto.findAll()
    .then(contactos => res.json(contactos))
    .catch(error => res.status(500).json({ error: error.message }));
});


// Crear un nuevo contacto
app.post('/contactos', (req, res) => {
  Contacto.create(req.body)
    .then(contacto => res.json(contacto))
    .catch(error => res.status(500).json({ error: error.message }));
});

// Leer un contacto específico
app.get('/contactos/:id', (req, res) => {
  Contacto.findByPk(req.params.id)
    .then(contacto => {
      if (contacto) {
        res.json(contacto);
      } else {
        res.status(404).json({ error: 'Contacto no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

// Actualizar un contacto específico
app.put('/contactos/:id', (req, res) => {
  Contacto.findByPk(req.params.id)
    .then(contacto => {
      if (contacto) {
        return contacto.update(req.body)
          .then(contacto => res.json(contacto));
      } else {
        res.status(404).json({ error: 'Contacto no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

// Eliminar un contacto específico
app.delete('/contactos/:id', (req, res) => {
  Contacto.findByPk(req.params.id)
    .then(contacto => {
      if (contacto) {
        return contacto.destroy()
          .then(() => res.json({ message: 'Contacto eliminado' }));
      } else {
        res.status(404).json({ error: 'Contacto no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = app;
