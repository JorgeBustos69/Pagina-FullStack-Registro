import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styleProducto.css";

const productos = [
  {
    id: 1,
    nombre: "Torta de vainilla con frutos rojos y almendra",
    descripcion:
      "Un pastel elaborado con capas de bizcocho de vainilla suave, relleno con crema y frutos rojos frescos. Decorado con almendras tostadas.",
    precio: 10000,
    imagenUrl: "https://rhenania.cl/wp-content/uploads/2020/12/MERENGUE-MIXTA.jpg",
  },
  {
    id: 2,
    nombre: "Torta de chocolate con manjar",
    descripcion:
      "Bizcocho húmedo de chocolate con relleno de manjar y cobertura cremosa.",
    precio: 12000,
    imagenUrl:
      "https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg",
  },
  {
    id: 3,
    nombre: "Torta MIXTA-CHOCOLATE",
    descripcion:
      "Torta mitad vainilla y mitad chocolate, con crema batida y frambuesas frescas.",
    precio: 15000,
    imagenUrl:
      "https://rhenania.cl/wp-content/uploads/2020/12/MIXTA-CHOCOLATE.jpg",
  },
];

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const encontrado = productos.find((p) => p.id === parseInt(id));
    setProducto(encontrado);
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

  if (!producto) {
    return (
      <>
        <Navegacion />
        <div className="container text-center py-5">
          <h2 className="text-danger mb-4">Producto no encontrado 😕</h2>
          <Link className="btn btn-outline-primary" to="/catalogo">
            ← Volver al catálogo
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navegacion />
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
    </>
  );
};

export default ProductoDetalle;
