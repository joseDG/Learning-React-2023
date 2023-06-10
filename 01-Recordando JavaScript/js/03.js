//Objetos - Destructuring con 2 o mas objetos

const producto = {
  nombre: "Tablet",
  precio: 100,
  disponibilidad: true
}

const cliente = {
  nombre: "Jose",
  premium: true
}

const {nombre, precio, disponibilidad} = producto
const {nombre:nombreCliente} = cliente

console.table(nombre, precio, disponibilidad);
console.log(nombreCliente)

//Unir dos objetos 
//const nuevoObjeto = Object.assign(producto, cliente) - No utilizar

const nuevoObjeto2 = {
  producto:{...producto},
  cliente:{...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)