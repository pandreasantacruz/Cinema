const mongoose = require("mongoose");

const movieObject = {
  title: { type: String, required: true, default: "Año de la pelicula" },
  year: {
    type: String,
    required: true,
    min: [4, "El año no puede tener menos de 4 caracteres"],
    default: "Ano dela pelicula",
  },
  director: {
    type: String,
    required: true,
    default: "Director de la pelicula",
  },
  duration: {
    type: String,
    required: true,
    default: "Duracion de la pelicula",
  },
  genre: { type: String, required: true, default: "Genero de la pelicula" },
  rate: { type: String, required: true, default: "Rate de la pelicula" },
  poster: { type: String, required: true, default: "Poster de la pelicula" },
};

const movieSchema = new mongoose.Schema(movieObject);
//(lado moongose, lado codigo)

const Movie = mongoose.model("Movie", movieSchema);
module.exports = { Movie };
