// funciones de negocio de cada ruta osea que se debe hacer
//Para esa ruta GET/USERS vam,mos a ir a la base de datos para pedir la info de los usuarios
//Y responder al cliente con la informacion obetenida son dos acciones diferentes
// Estra tarea no lo hace el controlador lo hace el servicio NOACCEDEN A LA INFO DIRECTAMENTE
// El cointrolador maneja errores tambien
// Obtiene  la informacion necesaria atraves de req
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
