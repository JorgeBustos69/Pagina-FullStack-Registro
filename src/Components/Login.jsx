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

    // Validaciones visuales (se mantienen igual que en tu diseño)
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

  // --- LÓGICA DE CONEXIÓN REAL ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validar antes de enviar
    if (errorMsg || formData.correo === '' || formData.contraseña === '') {
      alert('Por favor, completa los campos correctamente.');
      return;
    }

    try {
      // 2. Preparar los datos (Mapeamos tus nombres a los que espera el Backend)
      // Tu form usa 'correo' y 'contraseña', el backend espera 'email' y 'password'
      const credenciales = {
        email: formData.correo,
        password: formData.contraseña
      };

      // 3. Enviar al Backend (Puerto 9090)
      const respuesta = await fetch("http://localhost:9090/api/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      });

      const datos = await respuesta.json();

      // 4. Verificar respuesta
      if (datos.token) {
        // ¡ÉXITO! Guardamos el token real
        localStorage.setItem('token', datos.token);
localStorage.setItem('rol', datos.rol);
localStorage.setItem('email', credenciales.email);

// 🟢 AGREGA ESTO
if (datos.nombre) {
  localStorage.setItem('nombre', datos.nombre);
}


        alert(`✅ ¡Bienvenido de nuevo! Rol: ${datos.rol}`);
        
        // Redirigir al inicio
        window.location.href = "/";
      } else {
        // Error de credenciales
        alert("❌ " + (datos.mensaje || "Correo o contraseña incorrectos"));
      }

    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Error de conexión. Revisa que IntelliJ esté corriendo.");
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