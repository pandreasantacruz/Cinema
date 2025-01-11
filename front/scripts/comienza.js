const axios = require("axios");

const saveMovie = async (movie) => {
  try {
    const response = await axios.post("http://localhost:3000/movies", movie);
    console.log("Movie saved:", response.data);
  } catch (error) {
    console.error("Error saving movie:", error);
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
  saveMovie(movie);
});
document.getElementById("botonlimpiar").addEventListener("click", () => {
  document.getElementById("formulario").reset();
});
