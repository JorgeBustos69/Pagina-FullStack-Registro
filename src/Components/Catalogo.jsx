
import React from 'react';
import { Link } from 'react-router-dom';
import Navegacion from './Navegacion'; 
import { getProductos } from '../Data/Productos'; 
import '../styles/styleCatalogo.css'; 

const CardProducto = ({ producto }) => {
   
    const detalleRuta = `/producto/${producto.id}`; 

    return (
 
        <div className="producto"> 
            {/* El enlace dirige a la vista de detalle */}
            <Link to={detalleRuta}> 
                <img src={producto.imagenUrl} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p className="precio">${producto.precio.toLocaleString()}</p>
            </Link>
            
            {/* Aquí podrías añadir un botón de "Añadir al Carrito" */}
        </div>
    );
};

const Catalogo = () => {
  
    const productos = getProductos(); 

    return (
        <div>
            <Navegacion />
            
            {/* Sección del Catálogo (según tu catalogo.html) */}
            <section id="segunda"> 
                <h1>Catálogo de Productos</h1>
                
                {/* Contenedor donde se muestran los productos */}
                <div className="catalogo"> 
                    {/* Iteramos sobre los datos y creamos una CardProducto por cada uno */}
                    {productos.map(producto => (
                        <CardProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Catalogo;