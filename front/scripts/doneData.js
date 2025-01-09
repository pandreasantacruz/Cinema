const { mapear } = require("./mapear");
const divTarjetas = document.getElementById("articleMisPeliculasFavoritas");

const doneData = (infoMovies) => {
  const divTarjetas = document.getElementById("articleMisPeliculasFavoritas");
  divTarjetas.innerHTML = "";

  const arrayHtmlElement = infoMovies.map(mapear);
  arrayHtmlElement.forEach((movieHtml) => divTarjetas.appendChild(movieHtml));
};
module.exports = {
  doneData,
};
