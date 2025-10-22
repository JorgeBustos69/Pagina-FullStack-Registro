
let productos = [
  {
    id: 1,
    nombre: "Torta de Mil Hojas",
    precio: 29990,
    imagenUrl: "/assets/torta_milhojas.jpg", 
    descripcion: "Deliciosas capas de masa fina y crema pastelera.",
    stock: 10
  },
  {
    id: 2,
    nombre: "Pie de Limón",
    precio: 12500,
    imagenUrl: "/assets/pie_limon.jpg",
    descripcion: "Base de galleta, relleno cítrico y merengue suizo.",
    stock: 5
  },
];

export function getProductos() {
  return productos;
}

export function getProducto(id) {
  const productoId = parseInt(id);
  return productos.find(producto => producto.id === productoId);
}

export function agregarProducto(nuevoProducto) {
  const newId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
  const productoConId = { ...nuevoProducto, id: newId };
  productos.push(productoConId);
  return productoConId;
}

export function actualizarProducto(id, datosActualizados) {
  const index = productos.findIndex(p => p.id === parseInt(id));
  if (index !== -1) {
    productos[index] = { ...productos[index], ...datosActualizados };
    return productos[index];
  }
  return null;
}

export function eliminarProducto(id) {
  const idNumerico = parseInt(id);
  const index = productos.findIndex(p => p.id === idNumerico);
  if (index !== -1) {
    productos.splice(index, 1);
    return true; 
  }
  return false;
}
