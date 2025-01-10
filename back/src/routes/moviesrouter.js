const { Router } = require("express");

const {
  getAllMoviesController,
  postMovieController,
} = require("../controllers/moviescontrollers.js");

const { createMovieDataValidator } = require("../middleware/index.js");

const moviesRouter = Router();

moviesRouter.get("/", getAllMoviesController);
moviesRouter.post("/", createMovieDataValidator, postMovieController);

module.exports = {
  moviesRouter,
};
