// Selector del DOM

const heading = document.querySelector('.heading')
heading.textContent = 'Un nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')










// console.log(heading)
// console.log(heading.textContent)
// console.log(heading.tagName)
// console.log(heading.classList)
// console.log(heading.id)

