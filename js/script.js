const productos = [
  { id: 1, nombre: "camisas", precio: 2000 },
  { id: 2, nombre: "remeras", precio: 900 },
  { id: 3, nombre: "buzos", precio: 2500 },
  { id: 4, nombre: "mallas", precio: 1200 },
  { id: 5, nombre: "bermudas", precio: 1000 },
];

console.log(productos.length);

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

while (seleccion == "si") {
  let producto = prompt("Agregue un producto a su carrito");
  let precio = 0;

  if (
    producto == "camisas" ||
    producto == "remeras" ||
    producto == "buzos" ||
    producto == "mallas" ||
    producto == "bermudas"
  ) {
    switch (producto) {
      case "camisas":
        precio = 2000;
        break;
      case "remeras":
        precio = 900;
        break;
      case "buzos":
        precio = 2500;
        break;
      case "mallas":
        precio = 1200;
        break;
      case "bermudas":
        precio = 1000;
      default:
        break;
    }

    // let resultado = productos.find((prod) => prod.nombre === producto);
    // carrito.push(resultado);

    //NO ENTIENDO COMO HACER QUE FUNCIONE EL FIND, YA QUE SI CAMBIO EL SWITCH POR EL FIND, NO ME LOGRA DECIR EL TOTAL//

    let unidades = Number(prompt("¿Cuántas unidades desea llevar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("No está disponible ese producto");
  }

  seleccion = prompt("¿Desea seguir comprando?");

  while (seleccion == "no") {
    alert("Gracias por su compra! Hasta luego");
    carrito.forEach((carritoFinal) =>
      console.log(
        `producto: ${carritoFinal.producto}, unidades ${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      )
    );
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`El total de su compra a pagar es: ${total}`);
