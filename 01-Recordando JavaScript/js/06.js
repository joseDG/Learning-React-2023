const tecnologias = ['HTML','CSS','JavaScript','React','Node.js']
const numeros = [10,20,30]

let nuevoArray;

//Filter
const nuevoArray2 = tecnologias.filter(tech => tech !== 'React')

//compruba si el Array existe
//const resultado = tecnologias.includes('React')

//Find- Devuelve el primer elemento que cumple la condicion
// const resultado = numeros.find(numero => numero > 15)
// console.log(resultado)

//Every - Retorna true o false si todos cumplen la condicion
// const resultado = numeros.every(numero => numero > 9)

//Reduce - Acumula en el total
// const resultado = numeros.reduce((total, numero) => numero + total, 0)

//Filter
// const resultado = tecnologias.filter(tech => tech == "Node.js")
const resultado = numeros.filter(numero => numero > 15)

tecnologias.forEach((tech, index) => console.log(index))

//crea un array nuevo
const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)