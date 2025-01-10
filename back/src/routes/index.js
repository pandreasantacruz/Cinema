// Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar
// se define la socitud tipo get post delete o put
//Llamados a controladores
const { Router } = require("express");

const { moviesRouter } = require("./moviesrouter.js");

const router = Router();
//Controlador FUNCION CALLBACK
router.use("/movies", moviesRouter);

module.exports = {
  router,
};
