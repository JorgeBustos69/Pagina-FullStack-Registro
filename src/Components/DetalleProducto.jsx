import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navegacion from "./Navegacion";
import { getProducto } from "../data/productos";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styleproducto1.css";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarProducto = () => {
      console.log("🕵️ Buscando producto con ID:", id);
      const productoEncontrado = getProducto(Number(id));
      console.log("📦 Resultado getProducto:", productoEncontrado);

      if (productoEncontrado) {
        const corregido = {
          ...productoEncontrado,
          imagenUrl:
            productoEncontrado.imagenUrl ||
            productoEncontrado.imagenurl ||
            "",
        };
        setProducto(corregido);
      } else {
        setProducto(null);
      }

      setCargando(false);
    };

    cargarProducto();
  }, [id]);

  const handleAddToCart = () => {
    if (!producto) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagenUrl,
      cantidad: 1,
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const alerta = document.createElement("div");
    alerta.className =
      "alert alert-success text-center position-fixed top-0 start-50 translate-middle-x mt-3 w-50 shadow";
    alerta.innerHTML = `✅ <strong>${producto.nombre}</strong> añadido al carrito!`;
    document.body.appendChild(alerta);
    setTimeout(() => alerta.remove(), 2500);
  };

  if (cargando) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-warning" role="status"></div>
        <p className="mt-3">Cargando detalle...</p>
      </div>
    );
  }

  if (!producto) {
    return (
      <>
        <Navegacion />
        <div className="text-center mt-5">
          <h2 className="text-danger">Producto no encontrado 😭</h2>
          <Link to="/catalogo" className="btn btn-outline-primary mt-3">
            ← Volver al catálogo
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navegacion />
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 mb-4">
            <div className="card border-0 shadow rounded-4">
              <img
                src={producto.imagenUrl || ""}
                alt={producto.nombre || "Producto sin nombre"}
                className="card-img-top rounded-top-4"
                style={{ objectFit: "cover", height: "400px" }}
                onError={(e) => (e.target.src = "https://via.placeholder.com/400x400?text=Sin+Imagen")}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card border-0 bg-light shadow-sm rounded-4 p-4">
              <h1 className="text-center text-brown mb-3 fw-bold">
                {producto.nombre}
              </h1>
              <h3 className="text-success text-center fw-semibold mb-3">
                ${producto.precio?.toLocaleString("es-CL")}
              </h3>
              <p className="text-secondary text-center fs-6 mb-4">
                {producto.descripcion}
              </p>
              <div className="d-flex flex-column gap-3 align-items-center">
                <button
                  className="btn btn-warning rounded-pill px-4 fw-semibold shadow-sm"
                  onClick={handleAddToCart}
                >
                  🛒 Añadir al carrito
                </button>
                <Link
                  className="btn btn-outline-secondary rounded-pill px-4"
                  to="/catalogo"
                >
                  ← Volver al catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
