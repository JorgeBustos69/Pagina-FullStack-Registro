// src/Components/DetalleProducto.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navegacion from './Navegacion'; 
// Asegúrate de que tienes esta función en '../Data/Productos.js'
import { getProducto } from '../Data/Productos'; 
import '../styles/styleproducto1.css'; // Importa el CSS para el diseño de detalle

const DetalleProducto = () => {
    // 1. Obtener el ID de la URL (ruta dinámica)
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    // 2. Cargar datos del producto por ID (Integración de persistencia)
    useEffect(() => {
        // Llama a la función del archivo de datos para obtener el producto
        const productoEncontrado = getProducto(id); 
        setProducto(productoEncontrado);
    }, [id]);

    // 3. Lógica de "Añadir al Carrito" (Migración de productoFn.js con localStorage)
    const handleAddToCart = () => {
        if (producto) {
            const item = {
                id: producto.id,
                nombre: producto.nombre,
                // Usamos el precio numérico para cálculos futuros
                precio: producto.precio, 
                imagen: producto.imagenUrl
            };
            
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(item);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            
            alert(`✅ ${producto.nombre} añadido al carrito!`);
        }
    };
    
    // Muestra un mensaje de carga si el producto aún no se encuentra
    if (!producto) return <div>Cargando detalle o producto no encontrado...</div>;

    // 4. Renderizado del HTML migrado (productoX.html)
    return (
        <>
            <Navegacion />
            
            <main className="producto-detalle">
                <div className="imagen">
                    <img src={producto.imagenUrl} alt={producto.nombre}/> 
                </div>

                <div className="info">
                    <h1>{producto.nombre}</h1>
                    {/* Formateo del precio con toLocaleString() */}
                    <p className="precio">${producto.precio.toLocaleString('es-CL')}</p> 

                    <p className="descripcion">
                        {producto.descripcion} 
                    </p>
                    
                    {/* Botón con el evento de React (Interactividad mejorada) */}
                    <button 
                        className="btn" 
                        onClick={handleAddToCart}
                    >
                        Añadir al carrito
                    </button>
                    
                    {/* Enlace de navegación */}
                    <Link className="volver" to="/catalogo">← Volver al catálogo</Link>
                </div>
            </main>
        </>
    );
};

export default DetalleProducto;