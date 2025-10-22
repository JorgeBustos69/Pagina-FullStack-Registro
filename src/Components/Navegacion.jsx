import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
    return (
        <section id="primera">
            <Link to="/">Inicio</Link> 
            <Link to="/registro">Registro</Link>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/catalogo">Catálogo</Link>
            <Link to="/carrito">Carrito</Link>
        </section>
    );
};

export default Navegacion;