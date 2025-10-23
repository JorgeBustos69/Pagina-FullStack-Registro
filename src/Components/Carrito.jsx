// src/Components/Carrito.jsx
import React, { useState, useEffect } from 'react';
import Navegacion from './Navegacion'; 
import '../styles/styleCarrito.css';
import '../styles/style.css'; 

const Carrito = () => {
  const [carrito, setCarrito] = useState(() => {
    const stored = localStorage.getItem('carrito');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const calcularTotal = () =>
    carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const handleCantidadChange = (index, nuevaCantidad) => {
    if (nuevaCantidad < 1) nuevaCantidad = 1;
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad = parseInt(nuevaCantidad);
    setCarrito(nuevoCarrito);
  };

  const handleEliminar = (index) => {
    const nuevo = carrito.filter((_, i) => i !== index);
    setCarrito(nuevo);
  };

  const handleVaciar = () => {
    if (window.confirm("¿Seguro que quieres vaciar el carrito?")) {
      setCarrito([]);
    }
  };

 const handlePagar = () => {
  const total = calcularTotal();

  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  alert(`💰 Pago realizado con éxito.\nTotal: $${total.toLocaleString("es-CL")}`);

  setCarrito([]);
  localStorage.removeItem("carrito");

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
              {carrito.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.imagen} alt={item.nombre} width="70" style={{ borderRadius: "8px" }} />
                  </td>
                  <td>{item.nombre}</td>
                  <td>${item.precio.toLocaleString("es-CL")}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.cantidad}
                      onChange={(e) => handleCantidadChange(index, e.target.value)}
                      style={{ width: "60px", textAlign: "center" }}
                    />
                  </td>
                  <td>${(item.precio * item.cantidad).toLocaleString("es-CL")}</td>
                  <td>
                    <button className="eliminar-btn" onClick={() => handleEliminar(index)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {carrito.length > 0 && (
          <div className="acciones">
            <h2>Total: ${calcularTotal().toLocaleString("es-CL")}</h2>
            <button className="vaciar" onClick={handleVaciar}>Vaciar Carrito</button>
            <button className="pagar" onClick={handlePagar}>Comprar ahora</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
