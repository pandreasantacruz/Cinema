const { mapear } = require("./mapear");

const failData = (error) => {
  const divTarjetas = document.getElementById("articleMisPeliculasFavoritas");
  divTarjetas.innerHTML = "";
  alert("Error en el servidor intentelo mas tarde");
  console.error("Error detectado:", error);
};
module.exports = {
  failData,
};
