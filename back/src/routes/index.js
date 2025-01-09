// Aqui vamos a definir las rutas a traves de las cuales nos podemos comunicar
// se define la socitud tipo get post delete o put
const { Router } = require("express");
const { controller } = require("../controllers");

const router = Router();
//Controlador FUNCION CALLBACK
router.get("/movies", controller);

module.exports = router;
