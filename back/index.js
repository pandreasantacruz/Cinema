const express = require("express");

const { app } = require("./src/server");

app.listen(3000, () => {
  // le indica al servidor que empiece a escuchar solicitudes indica puerto
  console.log("Servidor escuchando en el puerto 3000");
});
