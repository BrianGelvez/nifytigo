const axios = require("axios");

const allVideoGames = async () => {
    const URL =  `https://api.rawg.io/api/games?key=1e1c4aa3bafb415f8abf00ca9789af7f&page=1&page_size=50`
    const pageNum = 4;
    const responsePromises = [];
    //Se crea un arreglo responsePromises para almacenar las promesas de las respuestas de las solicitudes HTTP.
  
      for (let i = 1; i <= pageNum; i++) {
        responsePromises.push(axios.get(`${URL}&page=${i}`));
    //es un bucle for que se utiliza para realizar múltiples solicitudes HTTP a la API  y almacenar 
    //las promesass utilizando el método push(). de las respuestas en un arreglo llamado responsePromises
      }
  
      const responses = await Promise.all(responsePromises);
     //e utiliza Promise.all para esperar a que todas las promesas del arreglo responsePromises se resuelvan 
     //y se obtienen todas las respuestas de la API en forma de un arreglo responses.
  
      const allResponse = responses.flatMap((response) => response.data.results);//flatMap permite mapear y aplanar 
  //los resultados de manera más eficiente que map seguido de concat.
  
      //Se utiliza flatMap para extraer los datos de los juegos de todas las respuestas de la API y combinarlos 
      //en un solo arreglo allResponse.
  
      const dataGames = allResponse.map(({ id, name, description, platforms, background_image }) => ({
        id,
        name,
        description,
        platforms,
        image: background_image,
      }));
     //Se utiliza map para recorrer cada juego en allResponse y extraer las propiedades 
     //necesarias (como id, name, description, etc.).
  
  /*----------- */
  const allData = [...dataGames]
  return allData;
}
const idGames = async (id) =>{
  const URL = `https://api.rawg.io/api/games/${id}?key=1e1c4aa3bafb415f8abf00ca9789af7f&page_size=40`;
  const response = await axios.get(URL);
  const data = response.data;
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    platforms: data.platforms,
    image: data.background_image,
  }
}

module.exports =  {allVideoGames, idGames}