const { doneData } = require("./doneData");
const { failData } = require("./failData");
const axios = require("axios");

const getMoviesData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    doneData(response.data.data); //como responde el servidor
  } catch (error) {
    failData();
  }
};
getMoviesData();

/*$.get("https://students-api.up.railway.app/movies")
  .done(doneData)
  .fail(failData);

/*fetch ("https://students-api.up.railway.app/movies")
  .then ((info) =>{
    return info.json()})

  .then (dataMovies) => { ====> CAPTURA LA INFO CON EL FETCH DE LA URL YPERO HAY QUE TRANSFORMAR LA INFO A JSON
    console.log(dataMovies)})
  
  .catch(error){
    console.log(error)
  }
 */
/*axios
  .get("https://students-api.up.railway.app/movies")
  console
  .then((info) => {
    doneData(info.data); // Maneja datos exitosos.
  })
  .catch(failData); // Maneja errores.
*/
