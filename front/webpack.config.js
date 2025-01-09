module.exports = {
  entry: "./scripts/index.js", // por donde empieza a escanear el proyecto

  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  }, // donde se guarda el resultado
};
