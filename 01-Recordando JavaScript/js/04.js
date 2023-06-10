//Arrays o Arreglos

const tecnologia = [20,30,true, 'React', 'JavaScript']

// console.log(tecnologia[10])
// console.log(tecnologia)

// console.log(tecnologia.length)

//Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Anadir elementos
const nuevoArreglo = [...tecnologias, 'GraphQL']

//Eliminar elemento del array
//tecnologias.shift()
// const nuevoArray = tecnologias.filter( function (tech) {
//   return tech === 'React'
// })

//Reemplazar el array
const nuevoArray = tecnologias.map(function(tech){
  if(tech === 'HTML'){
    return 'GraphQl'
  }else{
    return tech
  }
})

//Destructuring de objetos
const [, , var5] = tecnologias

// console.log(tecnologias)
// console.log(nuevoArray)
// console.log(var5)

//Iterador en JS
//forEach - acceder a cada elemento del array
const arrayForEach = tecnologias.forEach(function(tech){
  return tech
})

//Crea un nuevo array
const arrayMap = tecnologias.map(function(tech){
  return tech
})

console.log(arrayForEach)
console.log(arrayMap)