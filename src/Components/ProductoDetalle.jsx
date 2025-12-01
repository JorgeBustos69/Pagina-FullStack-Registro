import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navegacion from "./Navegacion";  // Keep this import if needed in the main layout file
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styleProducto.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:9090/productos/${id}`);
        if (!response.ok) {
          throw new Error("Producto no encontrado");
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProducto(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  const handleAddToCart = () => {
    if (!producto) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const existente = carrito.find((item) => item.id === producto.id);

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagenUrl,
        cantidad: 1,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`✅ ${producto.nombre} añadido al carrito`);
  };

  if (loading) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-info mb-4">Cargando producto...</h2>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-danger mb-4">Producto no encontrado 😕</h2>
        <Link className="btn btn-outline-primary" to="/catalogo">
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <main className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={producto.imagenUrl}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{producto.nombre}</h1>
          <p className="text-muted fs-5">
            ${producto.precio.toLocaleString("es-CL")}
          </p>
          <p className="mb-4">{producto.descripcion}</p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <button className="btn btn-success btn-lg" onClick={handleAddToCart}>
              🛒 Añadir al carrito
            </button>
            <Link className="btn btn-outline-secondary btn-lg" to="/catalogo">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductoDetalle;
