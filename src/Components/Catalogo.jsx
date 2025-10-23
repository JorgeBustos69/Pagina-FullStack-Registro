import React from "react";
import { Link } from "react-router-dom";
import Navegacion from "./Navegacion";
import "../styles/styleCatalogo.css";

const Catalogo = () => {
  // Los mismos productos que en tu HTML
  const productos = [
    {
      id: 1,
      nombre: "Torta de vainilla con frutos rojos y almendra",
      descripcion:
        "Una torta de bizcocho bañada en crema de vainilla con frutos rojos y los bordes con almendras.",
      precio: 10000,
      imagenUrl:
        "https://rhenania.cl/wp-content/uploads/2020/12/MERENGUE-MIXTA.jpg",
    },
    {
      id: 2,
      nombre: "Torta de chocolate con manjar",
      descripcion: "Torta con crema de chocolate rellena de manjar.",
      precio: 12000,
      imagenUrl:
        "https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg",
    },
    {
      id: 3,
      nombre: "Torta MIXTA-CHOCOLATE",
      descripcion:
        "Torta de chocolate con crema y frambuesas con borde de chispas de chocolate.",
      precio: 15000,
      imagenUrl:
        "https://rhenania.cl/wp-content/uploads/2020/12/MIXTA-CHOCOLATE.jpg",
    },
  ];

  return (
    <div>
      <Navegacion />

      <section id="segunda">
        <h1>Catálogo de Productos</h1>

        <div className="catalogo">
          {productos.map((producto) => (
            <Link key={producto.id} to={`/producto/${producto.id}`} className="producto">
              <img src={producto.imagenUrl} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p className="precio">${producto.precio.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
