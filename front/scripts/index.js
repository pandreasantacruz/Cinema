const divTarjetas = document.getElementById("articleMisPeliculasFavoritas");

const mapear = (movie) => {
  const div = document.createElement("div");
  const titulo = document.createElement("h5");
  const ano = document.createElement("p");
  const direc = document.createElement("p");
  const duracion = document.createElement("p");
  const puntuacion = document.createElement("p");
  const imagen = document.createElement("img");

  div.classList.add("card-body");

  imagen.src = movie.poster;
  imagen.classList.add("card-img-top");
  imagen.alt = movie.title;
  imagen.classList.add("card-image-cap");
  puntuacion.innerText = movie.rate;
  puntuacion.classList.add("card-text");
  duracion.innerText = movie.duration;
  duracion.classList.add("card-text");
  direc.innerText = movie.director;
  direc.classList.add("card-text");
  ano.innerText = movie.year;
  ano.classList.add("card-text");
  titulo.innerText = movie.title;
  titulo.classList.add("card-title");

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
