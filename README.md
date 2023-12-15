# Contact App

## Descripción

Contact App es una aplicación web que permite a los usuarios gestionar sus contactos. Los usuarios pueden agregar, editar y eliminar contactos. Cada contacto tiene un nombre, un número de teléfono y una dirección de correo electrónico.

## Tecnologías utilizadas

- Frontend: React
- Backend: Express, Sequelize
- Base de datos: PostgreSQL

## Estructura del proyecto

El proyecto se divide en dos partes principales: el frontend y el backend.

### Frontend

El frontend de la aplicación está construido con React. Aquí están los componentos principales:

- `App.js`: Este es el componente principal de la aplicación. Define las rutas de la aplicación.
- `ListaContactos.js`: Este componente muestra una lista de todos los contactos. Los usuarios pueden agregar nuevos contactos y eliminar contactos existentes desde aquí.
- `DetallesContacto.js`: Este componente muestra los detalles de un contacto específico. Los usuarios pueden editar la información del contacto desde aquí.

### Backend

El backend de la aplicación está construido con Express y Sequelize. Aquí están los archivos principales:

- `server.js`: Este es el punto de entrada del servidor. Inicia el servidor y define las rutas de la API.
- `models/contacto.js`: Este archivo define el modelo de Sequelize para los contactos.
- `controllers/ContactoController.js`: Este controlador define las operaciones CRUD para los contactos.

## Cómo ejecutar el proyecto

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia la base de datos PostgreSQL.
4. Ejecuta las migraciones de Sequelize con `npx sequelize-cli db:migrate`.
5. Inicia el servidor con `npm start`.
6. Abre `http://localhost:3000` en tu navegador.

## Pruebas

Las pruebas unitarias se realizan con Jest y React Testing Library. Puedes ejecutar las pruebas con `npm test`.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir la contribución antes de hacer un pull request.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
