const productosBase = [
  {
    id: 1,
    nombre: "Torta de vainilla con frutos rojos y almendra",
    precio: 10000,
    imagenUrl: "https://rhenania.cl/wp-content/uploads/2020/12/MERENGUE-MIXTA.jpg",
    descripcion: "Bizcocho húmedo con crema de vainilla, frutos rojos y almendras tostadas en los bordes.",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Torta de chocolate con manjar",
    precio: 12000,
    imagenUrl: "https://amoradulce.com/wp-content/uploads/2019/12/Torta-chocolate-1_04_13_2024-scaled.jpg",
    descripcion: "Torta de chocolate rellena con manjar artesanal y cobertura cremosa.",
    stock: 8,
  },
  {
    id: 3,
    nombre: "Torta MIXTA-CHOCOLATE",
    precio: 15000,
    imagenUrl: "https://rhenania.cl/wp-content/uploads/2020/12/MIXTA-CHOCOLATE.jpg",
    descripcion: "Combinación de crema de vainilla y frambuesas con cubierta de chocolate y chispas.",
    stock: 6,
  },
];

export function getProductos() {
  const guardados = JSON.parse(localStorage.getItem("productos")) || [];

  const corregidos = guardados.map((p) => ({
    ...p,
    imagenUrl: p.imagenUrl || p.imagenurl || "",
  }));

  return [...productosBase, ...corregidos];
}

export function getProducto(id) {
  const productoId = Number(id);
  const guardados = JSON.parse(localStorage.getItem("productos")) || [];

  const corregidos = guardados.map((p) => ({
    ...p,
    imagenUrl: p.imagenUrl || p.imagenurl || "",
  }));

  const todos = [...productosBase, ...corregidos];

  console.log("🕵️ Buscando producto con ID:", productoId);
  console.log("📦 Productos disponibles:", todos);

  const encontrado = todos.find((p) => Number(p.id) === productoId);

  if (!encontrado) {
    console.warn("⚠️ Producto no encontrado:", productoId);
  } else {
    console.log("✅ Producto encontrado:", encontrado);
  }

  return encontrado || null;
}

export function agregarProducto(nuevoProducto) {
  const guardados = JSON.parse(localStorage.getItem("productos")) || [];
  const todos = [...productosBase, ...guardados];

  const newId = Math.max(...todos.map((p) => p.id), 0) + 1;

  const productoConId = {
    ...nuevoProducto,
    id: newId,
    imagenUrl: nuevoProducto.imagenUrl || nuevoProducto.imagenurl || "",
  };

  guardados.push(productoConId);
  localStorage.setItem("productos", JSON.stringify(guardados));

  console.log("✅ Producto agregado:", productoConId);
  return productoConId;
}

export function eliminarProducto(id) {
  const guardados = JSON.parse(localStorage.getItem("productos")) || [];
  const nuevos = guardados.filter((p) => Number(p.id) !== Number(id));
  localStorage.setItem("productos", JSON.stringify(nuevos));
  console.log("🗑️ Producto eliminado:", id);
}
