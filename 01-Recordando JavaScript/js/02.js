//Objetos

const producto = {
  nombre:"tablet",
  precio:300,
  disponibilidad: true
}

// console.table(producto)
// console.log(producto.nombre)
// console.log(producto.precio)

//Destructuring
const { nombre, precio, disponibilidad } = producto
console.log(nombre, precio, disponibilidad)

//Object literal Enhacement
const autenticado = true
const usuario = "Juan"

const nuevoOjecto ={
  autenticado,
  usuario
}

//Freeze - No deja modificarlo, no permite anadir ni eleiminar
Object.freeze(producto)
// Seal - modifica propiedades existentes, no permite anadir ni eliminar
Object.seal(producto)

//modificar propiedad de un objeto
producto.nombre = "Pc GAMER"

//agregar uno
producto.imagen = "img.jpg"

//eliminar
delete producto.nombre

console.table(producto);