import React, { useEffect, useState } from "react";
import Navegacion from "./Navegacion";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagenUrl: ""
  });

  // ============================
  // Cargar productos del backend
  // ============================
  const cargarProductos = async () => {
    const res = await fetch("http://localhost:9090/api/productos");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // ==================================
  // Crear producto
  // ==================================
  const crearProducto = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:9090/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto)
    });

    if (res.ok) {
      alert("Producto creado correctamente");
      setNuevoProducto({ nombre: "", descripcion: "", precio: "", imagenUrl: "" });
      cargarProductos();
    }
  };

  // ==================================
  // Eliminar producto
  // ==================================
  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Eliminar producto?")) return;

    await fetch(`http://localhost:9090/api/productos/${id}`, {
      method: "DELETE"
    });

    cargarProductos();
  };

  return (
    <>
      <Navegacion />

      <div className="container py-5">
        <h2 className="text-center mb-4">Administrar Productos</h2>

        {/* FORMULARIO CREAR */}
        <div className="card p-4 shadow-sm mb-4">
          <h4 className="mb-3">Crear nuevo producto</h4>

          <form onSubmit={crearProducto}>
            <input
              className="form-control mb-2"
              placeholder="Nombre"
              value={nuevoProducto.nombre}
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
              required
            />

            <textarea
              className="form-control mb-2"
              placeholder="Descripción"
              value={nuevoProducto.descripcion}
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}
              required
            />

            <input
              className="form-control mb-2"
              type="number"
              placeholder="Precio"
              value={nuevoProducto.precio}
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="URL de imagen"
              value={nuevoProducto.imagenUrl}
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagenUrl: e.target.value })}
              required
            />

            <button className="btn btn-success w-100">Crear Producto</button>
          </form>
        </div>

        {/* LISTA DE PRODUCTOS */}
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img
                  src={producto.imagenUrl}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="fw-bold">{producto.nombre}</h5>
                  <p className="text-muted">{producto.descripcion}</p>
                  <p className="fw-semibold text-success">${producto.precio}</p>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminProductos;
