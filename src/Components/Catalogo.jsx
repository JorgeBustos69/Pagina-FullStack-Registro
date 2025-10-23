import React from "react";
import { Link } from "react-router-dom";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css"


const Catalogo = () => {
  const productos = [
    {
      id: 1,
      nombre: "Torta de vainilla con frutos rojos y almendra",
      descripcion:
        "Bizcocho húmedo con crema de vainilla, frutos rojos y almendras tostadas en los bordes.",
      precio: 10000,
      imagenUrl:
        "https://rhenania.cl/wp-content/uploads/2020/12/MERENGUE-MIXTA.jpg",
    },
    {
      id: 2,
      nombre: "Torta de chocolate con manjar",
      descripcion: "Torta de chocolate rellena con manjar artesanal y cobertura cremosa.",
      precio: 12000,
      imagenUrl:
        "https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg",
    },
    {
      id: 3,
      nombre: "Torta MIXTA-CHOCOLATE",
      descripcion:
        "Combinación de crema de vainilla y frambuesas con cubierta de chocolate y chispas.",
      precio: 15000,
      imagenUrl:
        "https://rhenania.cl/wp-content/uploads/2020/12/MIXTA-CHOCOLATE.jpg",
    },
  ];

  return (
    <div>
      <Navegacion />

      <section className="container py-5">
        <h1 className="text-center mb-5 text-brown fw-bold">
          🍰 Catálogo de Productos
        </h1>

        <div className="row g-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch"
            >
              <div className="card shadow-sm border-0 rounded-4 w-100 h-100">
                <img
                  src={producto.imagenUrl}
                  className="card-img-top rounded-top-4"
                  alt={producto.nombre}
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center text-brown fw-bold">
                    {producto.nombre}
                  </h5>
                  <p className="card-text text-secondary small flex-grow-1 text-center">
                    {producto.descripcion}
                  </p>
                  <p className="text-center fs-5 fw-semibold text-success">
                    ${producto.precio.toLocaleString("es-CL")}
                  </p>
                  <Link
                    to={`/producto/${producto.id}`}
                    className="btn btn-warning mt-auto rounded-pill fw-semibold"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
