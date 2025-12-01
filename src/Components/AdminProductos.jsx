import React, { useState, useEffect } from "react";
import { getProductos, agregarProducto, eliminarProducto } from "../data/productos";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagenUrl: "",
  });

useEffect(() => {
  setProductos(getProductos());
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevo({ ...nuevo, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const nuevoProducto = agregarProducto({
      ...nuevo,
      precio: parseInt(nuevo.precio),
    });
    setProductos([...productos, nuevoProducto]);
    setNuevo({ nombre: "", precio: "", descripcion: "", imagenUrl: "" });
  };

  const handleDelete = (id) => {
    eliminarProducto(id);
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div className="container py-5">
      <Navegacion />
      <h1 className="text-center mb-4 fw-bold text-brown">
        🧁 Panel de Administración
      </h1>

      <form onSubmit={handleAdd} className="mb-4 p-3 border rounded-3 bg-light shadow-sm">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              name="nombre"
              value={nuevo.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="col-md-2">
            <input
              name="precio"
              type="number"
              value={nuevo.precio}
              onChange={handleChange}
              className="form-control"
              placeholder="Precio"
              required
            />
          </div>
          <div className="col-md-3">
            <input
              name="descripcion"
              value={nuevo.descripcion}
              onChange={handleChange}
              className="form-control"
              placeholder="Descripción"
              required
            />
          </div>
          <div className="col-md-3">
            <input
              name="imagenUrl"
              value={nuevo.imagenUrl}
              onChange={handleChange}
              className="form-control"
              placeholder="URL Imagen"
              required
            />
          </div>
          <div className="col-md-1 d-flex align-items-center">
            <button type="submit" className="btn btn-success w-100">
              +
            </button>
          </div>
        </div>
      </form>

      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table-warning">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio.toLocaleString("es-CL")}</td>
              <td>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductos;
