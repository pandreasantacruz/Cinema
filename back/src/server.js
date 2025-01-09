const express = require("express");
const router = require("./routes");

const app = express(); //el servidor

app.use(router);

module.exports = {
  app,
};
