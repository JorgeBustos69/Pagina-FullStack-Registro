import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  const [usuario, setUsuario] = useState(null);

useEffect(() => {
  const cargarUsuario = () => {
    const nombreGuardado = localStorage.getItem("nombre");
    const rolGuardado = localStorage.getItem("rol");
    const token = localStorage.getItem("token");

    if (token) {
      setUsuario({
        nombre: nombreGuardado || "Usuario",
        rol: rolGuardado || "Cliente",
      });
    } else {
      setUsuario(null);
    }
  };

  cargarUsuario();


  window.addEventListener("storage", cargarUsuario);

  return () => {
    window.removeEventListener("storage", cargarUsuario);
  };
}, []);


  const handleCerrarSesion = () => {
    localStorage.clear(); 
    window.location.href = "/login"; 
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#d89b6d" }}
    >
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/">Inicio</Link>
            </li>

            {!usuario && (
              <>
                <li className="nav-item mx-3">
                  <Link className="nav-link fw-semibold text-dark" to="/registro">
                    Registro
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link fw-semibold text-dark" to="/login">
                    Iniciar sesión
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/catalogo">
                Catálogo
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/carrito">
                Carrito
              </Link>
            </li>
          </ul>

          {usuario && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown mx-3">
                <span
                  className="nav-link dropdown-toggle fw-semibold text-dark"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Hola, <strong>{usuario.nombre}</strong>
                </span>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button 
                      className="dropdown-item fw-semibold"
                      onClick={handleCerrarSesion}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
