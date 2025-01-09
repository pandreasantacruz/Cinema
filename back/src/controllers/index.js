// funciones de negocio de cada ruta osea que se debe hacer
//Para esa ruta GET/USERS vam,mos a ir a la base de datos para pedir la info de los usuarios
//Y responder al cliente con la informacion obetenida son dos acciones diferentes
// Estra tarea no lo hace el controlador lo hace el servicio
// El cointrolador maneja errores tambien

const controller = (req, res) => {
  res.status(200).send("Proximamente Peliculas");
};

module.exports = {
  controller,
};
