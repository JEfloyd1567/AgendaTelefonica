// detallesContacto.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './detalleContacto.css';

function DetallesContacto() {
  const [contacto, setContacto] = useState(null);
  const [contactoEditado, setContactoEditado] = useState({ nombre: '', telefono: '', correo_electronico: '' });
  const [editando, setEditando] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/contactos/${id}`)
      .then(response => {
        setContacto(response.data);
        setContactoEditado(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  const editarContacto = () => {
    axios.put(`http://localhost:3001/api/contactos/${id}`, contactoEditado)
      .then(response => {
        setContacto(response.data);
        setEditando(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="details-container">
      {contacto ? (
        <div className="contact-card">
          {editando ? (
            <div>
              <input type="text" value={contactoEditado.nombre} onChange={e => setContactoEditado({ ...contactoEditado, nombre: e.target.value })} placeholder="Nombre" />
              <input type="text" value={contactoEditado.telefono} onChange={e => setContactoEditado({ ...contactoEditado, telefono: e.target.value })} placeholder="Teléfono" />
              <input type="text" value={contactoEditado.correo_electronico} onChange={e => setContactoEditado({ ...contactoEditado, correo_electronico: e.target.value })} placeholder="Correo Electrónico" />
              <button className="edit-btn" onClick={editarContacto}>Guardar Cambios</button>
            </div>
          ) : (
            <div>
              <h2>{contacto.nombre}</h2>
              <p>{contacto.telefono}</p>
              <p>{contacto.correo_electronico}</p>
              <button className="edit-btn" onClick={() => setEditando(true)}>Editar Contacto</button>
            </div>
          )}
        </div>
      ) : (
        <p>Cargando detalles del contacto...</p>
      )}

      {/* Botón "Ir a la página principal" al lado derecho */}
      <button className="go-to-main-btn" onClick={() => navigate('/')}>Ir a la página principal</button>
    </div>
  );
}

export default DetallesContacto;
