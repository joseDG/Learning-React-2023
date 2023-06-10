//Funciones - Function Declataration

function sumar(numero1= 0, numero2=0){
  return {
    resultado: numero1 + numero2,
    mensaje: 'Hola Mundo'
  };
}

const {resultado, mensaje} = sumar(20,30)
// console.log(resultado)

//Funciones - Function Expression
const restar = function(numero =0, numero3=0){
  return numero - numero3
}

const resultado1 = restar(30, 20)
console.log(resultado1)

//Funciones arrow
const sumaArrow = () => 3 + 2
const resultadoA = sumaArrow()
console.log(resultadoA)