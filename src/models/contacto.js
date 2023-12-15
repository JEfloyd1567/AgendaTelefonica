// Importamos los módulos necesarios de Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Creamos una nueva instancia de Sequelize para nuestra base de datos
// Reemplaza 'database', 'username' y 'password' con tus propios detalles de la base de datos
const sequelize = new Sequelize('contactApp', 'postgres', 'floyd', {
  host: 'localhost', // El host de tu base de datos
  dialect: 'postgres', // Estamos usando PostgreSQL
  schema: 'contactApp' // El esquema de tu base de datos
});

// Definimos el modelo 'Contactos' con Sequelize
const Contacto = sequelize.define('Contactos', {
  // Campo 'id'
  id: {
    type: DataTypes.INTEGER, // Es de tipo INTEGER
    allowNull: false, // No permite valores nulos
    primaryKey: true, // Es una clave primaria
    autoIncrement: true // Se incrementará automáticamente
  },
  // Campo 'nombre'
  nombre: {
    type: DataTypes.TEXT, // Es de tipo TEXT
    allowNull: false // no Permite valores nulos
  },
  // Campo 'telefono'
  telefono: {
    type: DataTypes.TEXT, // Es de tipo TEXT
    allowNull: false //no Permite valores nulos
  },
  // Campo 'correo_electronico'
  correo_electronico: {
    type: DataTypes.TEXT, // Es de tipo TEXT
    allowNull: false // Permite valores nulos
  }
}, {
  timestamps: false // No añadirá automáticamente los campos 'createdAt' y 'updatedAt'
});

// Exportamos el modelo para que pueda ser requerido en otros archivos
module.exports = Contacto;
