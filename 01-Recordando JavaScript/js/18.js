//Fetch API - Async Await (Multiples)

const url = "https://jsonplaceholder.typicode.com/todos";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  const incio = performance.now()

  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  console.log(resultado)

  console.log('Inciando 2da consulta')

  const respuesta2 = await fetch(url2);
  const resultado2 = await respuesta2.json();
  // console.log(resultado2);

  const fin = performance.now()

  console.log(`Ejecucion primer Async: ${fin - incio} ms`)
 
};

consultarAPI();

const consultarAPI2 = async () => {
  const inicio = performance.now()

  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])
  const resultado = await respuesta.json()
  const resultado2 = await respuesta2.json()

  // console.log(resultado)
  // console.log(resultado2)
  const fin = performance.now();
  console.log(`Ejecucion segundo Async: ${fin - inicio} ms`);
};

consultarAPI2();