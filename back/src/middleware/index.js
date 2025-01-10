const createMovieDataValidator = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({
      message: "Falta Informacion para crear pelicula",
    });
  }
  next();
};
module.exports = {
  createMovieDataValidator,
};
