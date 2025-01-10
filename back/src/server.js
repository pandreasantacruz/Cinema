// Armar servidor configurarlo y exportarlo
const { router } = require("./routes/index.js");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express(); //el servidor
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); //Habilita a otras personas a que pida la info al servidor ()
app.use(router);

module.exports = {
  app,
};
