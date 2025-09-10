const boton = document.getElementById("agregarCarrito");

boton.addEventListener("click", () => {
  const producto = {
    nombre: document.querySelector("h1").innerText,
    precio: document.querySelector(".precio").innerText,
    imagen: document.querySelector(".imagen img").src
  };

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert("Producto añadido al carrito!");
});
