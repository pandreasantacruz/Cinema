const express = require("express");

const { app } = require("./src/server");
const { dbCon } = require("./src/config/dbCon.js");

dbCon()
  .then(() => {
    console.log("Conexion a la BD exitosa");
    app.listen(3000, () => {
      console.log("Servidor escuchando en el puerto 3000");
    });
  })
  .catch((err) => {
    console.error("Error al iniciar el servidor:", err.message);
  });
