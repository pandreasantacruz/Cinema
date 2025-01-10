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

const getAllMoviesController = (req, res) => {
  const movies = getAllMoviesService();

  res.status(200).json({
    message: "Get All Movies",
    data: movies,
  });
};
const postMovieController = (req, res) => {
  const response = postMovieService(req.body);

  res.status(201).json({
    message: "Movie Created Succesfully",
    data: response,
  });
};

module.exports = {
  getAllMoviesController,
  postMovieController,
};
