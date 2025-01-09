const { doneData } = require("./doneData");
const { failData } = require("./failData");
const axios = require("axios");

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
axios
  .get("https://students-api.up.railway.app/movies")
  .then((info) => {
    doneData(info.data); // Maneja datos exitosos.
  })
  .catch(failData); // Maneja errores.
/*
  const getMoviesData = async () => { con async await
    try{
    const {data} = awaitaxios.get("url")
    doneData (data) }
    catch (error){
    failData()
    }
    }
    getMoviesData()
  */
