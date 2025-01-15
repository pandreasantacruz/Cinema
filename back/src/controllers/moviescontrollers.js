const {
  getAllMoviesService,
  postMovieService,
} = require("../services/movieservices.js");

const getAllMoviesController = async (req, res) => {
  try {
    const movies = await getAllMoviesService();
    res.status(200).json({
      message: "Get all movies",
      data: movies,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error servidor",
    });
  }
};
const postMovieController = async (req, res) => {
  try {
    const response = await postMovieService(req.body);

    res.status(201).json({
      message: "Pelicula creada con exito",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al salvar",
    });
  }
};

module.exports = {
  getAllMoviesController,
  postMovieController,
};
