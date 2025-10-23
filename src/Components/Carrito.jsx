import React, { useState, useEffect } from "react";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styleCarrito.css";

const Carrito = () => {
  const [carrito, setCarrito] = useState(() => {
    const stored = localStorage.getItem("carrito");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
      localStorage.removeItem("carrito");
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
    <>
      <Navegacion />

      <div className="container py-5">
        <h1 className="text-center mb-4 text-brown">
          🛒 Carrito de Compras
        </h1>

        {carrito.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            Tu carrito está vacío.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered align-middle shadow-sm">
              <thead className="table-warning text-center">
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
                    <td className="text-center">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        width="80"
                        className="rounded shadow-sm"
                      />
                    </td>
                    <td>{item.nombre}</td>
                    <td className="text-center">
                      ${item.precio.toLocaleString("es-CL")}
                    </td>
                    <td className="text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad}
                        onChange={(e) =>
                          handleCantidadChange(index, e.target.value)
                        }
                        className="form-control text-center mx-auto"
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td className="text-center">
                      ${(item.precio * item.cantidad).toLocaleString("es-CL")}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleEliminar(index)}
                      >
                        <i className="bi bi-trash"></i> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {carrito.length > 0 && (
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 p-3 bg-light rounded shadow-sm">
            <h4 className="mb-3 mb-md-0 text-brown">
              Total: ${calcularTotal().toLocaleString("es-CL")}
            </h4>

            <div>
              <button
                className="btn btn-outline-danger me-2"
                onClick={handleVaciar}
              >
                🗑️ Vaciar Carrito
              </button>

              <button
                className="btn btn-success"
                onClick={handlePagar}
              >
                💳 Comprar ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carrito;
