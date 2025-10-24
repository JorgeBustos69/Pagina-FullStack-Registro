import React, { useState } from 'react';
import Navegacion from './Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === 'correo') {
      if (value.length < 3 || !value.includes('@')) {
        setErrorMsg('El correo debe tener al menos 3 letras y contener un "@".');
      } else {
        setErrorMsg('');
      }
    }

    if (id === 'contraseña') {
      if (value.length > 0 && value.length < 8) {
        setErrorMsg('La contraseña debe tener al menos 8 caracteres.');
      } else {
        setErrorMsg('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMsg || formData.correo === '' || formData.contraseña === '') {
      alert('Por favor, completa los campos correctamente.');
    } else {
      console.log(formData);
      alert('✅ Inicio de sesión exitoso (simulado).');
    }
  };

  return (
    <>
      <Navegacion />

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg border-0 rounded-4" style={{ maxWidth: '420px', width: '100%' }}>
          <h1 className="text-center mb-4 text-brown fw-bold">Iniciar sesión</h1>

          <form onSubmit={handleSubmit} role="form">
            <div className="mb-3 text-start">
              <label htmlFor="correo" className="form-label fw-semibold">Correo</label>
              <input
                type="email"
                id="correo"
                value={formData.correo}
                onChange={handleChange}
                required
                className={`form-control ${errorMsg && errorMsg.includes('correo') ? 'is-invalid' : ''}`}
                placeholder="ejemplo@correo.com"
              />
              {errorMsg.includes('correo') && <div className="invalid-feedback">{errorMsg}</div>}
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="contraseña" className="form-label fw-semibold">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                required
                className={`form-control ${errorMsg.includes('contraseña') ? 'is-invalid' : ''}`}
                placeholder="••••••••"
              />
              {errorMsg.includes('contraseña') && <div className="invalid-feedback">{errorMsg}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-brown w-100 mt-3 py-2"
              disabled={!formData.correo || !formData.contraseña}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
