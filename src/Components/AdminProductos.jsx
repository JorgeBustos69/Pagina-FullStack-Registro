import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagenUrl: ""
  });

  useEffect(() => {
    const rol = localStorage.getItem("rol");
    const token = localStorage.getItem("token");

    if (!token || rol !== "ADMIN") {
        alert("⛔ Acceso denegado. Solo administradores.");
        window.location.href = "/"; 
    }
  }, []);

  const obtenerUrlImagen = (urlBaseDeDatos) => {
    if (!urlBaseDeDatos) return "https://via.placeholder.com/150";
    const nombreArchivo = urlBaseDeDatos.split('/').pop();
    return `http://localhost:9090/${nombreArchivo}`;
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      "Authorization": token ? `Bearer ${token}` : ""
    };
  };

  const cargarProductos = async () => {
    try {
      const res = await fetch("http://localhost:9090/productos", {
          method: "GET",
          headers: getAuthHeaders()
      });
      
      if (res.ok) {
          const data = await res.json();
          setProductos(data);
      }
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const crearProducto = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:9090/productos", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify(nuevoProducto)
      });

      if (res.ok) {
        alert("Producto creado correctamente");
        setNuevoProducto({ nombre: "", descripcion: "", precio: "", imagenUrl: "" });
        cargarProductos();
      } else {
        alert("Error: No tienes permiso o faltan datos");
      }
    } catch (error) {
       console.error(error);
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Eliminar producto?")) return;

    try {
      const res = await fetch(`http://localhost:9090/productos/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });

      if (res.ok) {
          cargarProductos();
      } else {
          alert("Error al eliminar.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container py-5">
        <h2 className="text-center mb-4 text-brown">Administrar Productos</h2>

        <div className="card p-4 shadow-sm mb-5">
          <h4 className="mb-3">Crear nuevo producto</h4>

          <form onSubmit={crearProducto}>
            <input
              className="form-control mb-2"
              placeholder="Nombre del pastel"
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
              placeholder="Nombre de archivo de imagen (ej: chocolate.jpg)"
              value={nuevoProducto.imagenUrl}
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagenUrl: e.target.value })}
              required
            />

            <button className="btn btn-success w-100">Crear Producto</button>
          </form>
        </div>

        <h4 className="mb-3">Inventario Actual</h4>
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={obtenerUrlImagen(producto.imagenUrl)}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Error"; }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{producto.nombre}</h5>
                  <p className="text-muted small">{producto.descripcion}</p>
                  <p className="fw-semibold text-success">${producto.precio}</p>

                  <button
                    className="btn btn-danger w-100 mt-auto"
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
  );
};

export default AdminProductos;