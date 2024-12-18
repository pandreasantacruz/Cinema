const divTarjetas = document.getElementById("misPeliculasFavoritas");

const mapear = (movie) => {
  const div = document.createElement("div");
  const titulo = document.createElement("strong");
  const ano = document.createElement("span");
  const direc = document.createElement("span");
  const duracion = document.createElement("span");
  const puntuacion = document.createElement("span");
  const imagen = document.createElement("img");

  imagen.src = movie.poster;
  imagen.alt = movie.title;
  puntuacion.innerText = movie.rate;
  duracion.innerText = movie.duration;
  direc.innerText = movie.director;
  ano.innerText = movie.year;
  titulo.innerText = movie.title;

  div.appendChild(titulo);
  div.appendChild(ano);
  div.appendChild(direc);
  div.appendChild(duracion);
  div.appendChild(puntuacion);
  div.appendChild(imagen);

  return div;
};

$.get("https://students-api.up.railway.app/movies", (infoMovies) => {
  const arrayHtmlElement = infoMovies.map(mapear);
  arrayHtmlElement.forEach((movieHtml) => {
    divTarjetas.appendChild(movieHtml);
  });
});
