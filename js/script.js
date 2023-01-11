const productos = [
  { nombre: "camisas", precio: 2000 },
  { nombre: "remeras", precio: 900 },
  { nombre: "buzos", precio: 2500 },
  { nombre: "mallas", precio: 1200 },
  { nombre: "bermudas", precio: 1000 },
];
let carrito = [];

let seleccion = prompt(
  "¡Bienvenido a nuestro sitio web! ¿Desea comprar algún producto?"
);

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingrese si o no");
  seleccion = prompt(
    "¡Bienvenido a nuestro sitio web! ¿Desea comprar algún producto?"
  );
}

if (seleccion == "si") {
  alert("Nuestra lista de productos es:");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" \n"));
} else if (seleccion == "no") {
  alert("Gracias por su tiempo, hasta luego!!");
}
