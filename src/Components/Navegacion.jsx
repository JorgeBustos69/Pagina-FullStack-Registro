import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navegacion = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#d89b6d" }}
    >
      <div className="container justify-content-center">
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

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/">Inicio</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/registro">Registro</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/login">Iniciar sesión</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link fw-semibold text-dark" to="/carrito">Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
