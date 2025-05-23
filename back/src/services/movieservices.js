// const movies = [
//   // actrua como nuestra base de datos
//   {
//     title: "Guardians of the Galaxy Vol. 2",
//     year: 2017,
//     director: "James Gunn",
//     duration: "2h 16min",
//     genre: "Adventure",
//     rate: 7.7,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//   },
//   {
//     title: "Star Wars: Episode IV - A New Hope",
//     year: 1977,
//     director: "George Lucas",
//     duration: "2h 1min",
//     genre: "Adventure",
//     rate: 8.7,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//   },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//     director: "Peter Jackson",
//     duration: "2h 58min",
//     genre: "Adventure",
//     rate: 8.8,
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//   },
// ];

const { Movie } = require("../models/Movie.js");

const getAllMoviesService = async () => {
  try {
    const getMovies = await Movie.find({});
    return getMovies;
  } catch (error) {
    console.error("Error get all services", error);
    throw error;
  }
};

const postMovieService = async (movie) => {
  try {
    const newMovie = new Movie(movie);
    await newMovie.save();
    console.log("Estado del array movies:", newMovie);
    return newMovie;
  } catch (error) {
    console.error("Error al guardar pelicula:", error);
    throw error;
  }
};

module.exports = {
  getAllMoviesService,
  postMovieService,
};
