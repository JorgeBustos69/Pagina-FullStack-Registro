import React, { useState } from 'react';
import Navegacion from './Navegacion';
import '../styles/styleLogin.css'; // 👈 nombre correcto: carpeta "styles"

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
        setErrorMsg('Ingresa mínimo 3 letras y el correo debe contener un @.');
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
      console.log('Intento de login con:', formData);
      alert('Inicio de sesión exitoso (simulado).');
    }
  };

  return (
    <>
      <Navegacion />
      <div className="login-container">
        <div className="login-card">
          <h1>Iniciar sesión</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className={errorMsg ? 'error' : ''}
              placeholder="DiegoF@gmail.com"
            />

            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
              placeholder="contraseñacienporcientosegura"
            />

            <p className="error-msg">{errorMsg || ' '}</p>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
