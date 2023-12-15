// ListaContactos.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './listaContactos.css';

function ListaContactos() {
  const [contactos, setContactos] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState({ nombre: '', telefono: '', correo_electronico: '' });

  const navigate = useNavigate(); // Usa useNavigate para la navegación

  useEffect(() => {
    axios.get('http://localhost:3001/api/contactos')
      .then(response => setContactos(response.data))
      .catch(error => console.error(error));
  }, []);

  const agregarContacto = () => {
    axios.post('http://localhost:3001/api/contactos', nuevoContacto)
      .then(response => {
        setContactos([...contactos, response.data]);
        setNuevoContacto({ nombre: '', telefono: '', correo_electronico: '' }); // Aquí se reinician los inputs
      })
      .catch(error => console.error(error));
  };

  const eliminarContacto = (id) => {
    axios.delete(`http://localhost:3001/api/contactos/${id}`)
      .then(response => setContactos(contactos.filter(contacto => contacto.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <div className="form-container">
        <input type="text" value={nuevoContacto.nombre} onChange={e => setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })} placeholder="Nombre" />
        <input type="text" value={nuevoContacto.telefono} onChange={e => setNuevoContacto({ ...nuevoContacto, telefono: e.target.value })} placeholder="Teléfono" />
        <input type="text" value={nuevoContacto.correo_electronico} onChange={e => setNuevoContacto({ ...nuevoContacto, correo_electronico: e.target.value })} placeholder="Correo Electrónico" />
        <button onClick={agregarContacto}>Agregar Contacto</button>
      </div>
      <div className="contact-list">
        {contactos.map(contacto => (
          <div key={contacto.id} className="contact-card">
            <h2>{contacto.nombre}</h2>
            <p>{contacto.telefono}</p>
            <p>{contacto.correo_electronico}</p>
            <button className="delete-btn" onClick={() => eliminarContacto(contacto.id)}>Eliminar Contacto</button>
            {/* Agrega este botón para editar cada contacto */}
            <button onClick={() => navigate(`/editar/${contacto.id}`)}>Editar Contacto</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaContactos;
