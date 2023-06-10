//Fetch API - ASYNC AWAIT

const url = "https://jsonplaceholder.typicode.com/todos";

const consultarAPI = async () => {
    const respuesta = await fetch(url)
    console.log('despues de respuesta')
    const resultado = await respuesta.json()
    console.log('despues de resultado')
    resultado.forEach(comentario => {
      console.log(comentario)
    })
};

consultarAPI();
