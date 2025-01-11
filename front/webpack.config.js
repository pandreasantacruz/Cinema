module.exports = {
  entry: {
    index: "./scripts/index.js",
    comienza: "./scripts/comienza.js", // por donde empieza a escanear el proyecto
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  }, // donde se guarda el resultado
};
