import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#8b4513' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-light" to="/">
          🧁 1000 Sabores
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/registro">Registro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/login">Iniciar sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/carrito">Carrito 🛒</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
