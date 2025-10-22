import React, { useState, useEffect } from 'react';
import Navegacion from './Navegacion'; 
import '../styles/styleCarrito.css';
import '../styles/style.css'; 

const Carrito = () => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const storedCarrito = localStorage.getItem('carrito');
      return storedCarrito ? JSON.parse(storedCarrito) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]); 

  const calcularTotal = () => {
    return carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  };
  
  const handleEliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };
  
  const handleVaciarCarrito = () => {
    if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
      setCarrito([]);
    }
  };

  const handlePagar = () => {
    alert(`Total a pagar: $${calcularTotal()}. Redirigiendo a Checkout.`);
  };
  
  return (
    <div>
      <Navegacion />
      
      <div className="carrito-container">
        <h1>🛒 Carrito de Compras</h1>
        
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <table className="tabla-carrito">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((producto, index) => (
                <tr key={index} className="carrito-item">
                  <td></td>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>
                    <input 
                      type="number" 
                      min="1" 
                      value={producto.cantidad} 
                      onChange={(e) => { /* Lógica de cambio de cantidad */ }}
                    />
                  </td>
                  <td>${producto.precio * producto.cantidad}</td>
                  <td>
                    <button 
                      onClick={() => handleEliminarProducto(index)}
                      className="eliminar-btn"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="acciones"> 
          <h2>Total: ${calcularTotal()}</h2>
          <button 
            className="vaciar" 
            onClick={handleVaciarCarrito}
            disabled={carrito.length === 0}
          >
            Vaciar Carrito
          </button>
          <button 
            className="pagar" 
            onClick={handlePagar}
            disabled={carrito.length === 0}
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;