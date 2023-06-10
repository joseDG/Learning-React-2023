
const autenticado = false

autenticado ?
  console.log('Usuario autenticado'):
  console.log('No autenticado, dirigir hacia login')

//doble ternario
const saldo = 600
const pagar = 800
const tarjeta = false

saldo > pagar ?
  console.log('Puedes pagar con saldo'):
  tarjeta ?
    console.log('Puedes pagar con tarjeta'):
    console.log('No se puede pagar')