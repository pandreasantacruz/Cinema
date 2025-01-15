const axios = require("axios");

const saveMovie = async (movie) => {
  try {
    const response = await axios.post("http://localhost:3000/movies", movie);
    console.log("Pelicula Guardada:", response.data);
  } catch (error) {
    console.error("Error al guardar pelicula:", error);
  }
};

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  const movie = {
    title: document.getElementById("movietitle").value,
    year: document.getElementById("movieyear").value,
    director: document.getElementById("moviedirector").value,
    duration: document.getElementById("movieduration").value,
    genre: document.getElementById("moviegenre").value,
    rate: document.getElementById("movierate").value,
    poster: document.getElementById("movieposter").value,
  };
  console.log("Probando peliculas", movie);

  saveMovie(movie);
  alert("Pelicula guardada con exito. Ve a Home para verla");
});
document.getElementById("botonlimpiar").addEventListener("click", () => {
  document.getElementById("formulario").reset();
});
