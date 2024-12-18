class Movie{
    constructor( [title, year, director, duration, rate, poster]){
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.rate = rate 
        this.poster = poster
    }
}
class Repository{
    constructor() {
        this.movies = []
    }
getAllMovies (){
    return this.movies
}
createMovies ({title, year, director, duration, rate, poster}){
    let newMovie = new Movie(title, year, director, duration, rate, poster )
    this.movies.push(newMovie)
    }
}

const addMovieButton = document.getElementById("mostrarPeliculas")

const movieRepository = new Repository;

let i = 1;


const mapear = ((movie) => {
    const divTarjetas = document.getElementById('misPeliculasFavoritas')
    const div = document.createElement("div")
    const titulo = document.createElement("strong")
    const ano = document.createElement("span")
    const direc = document.createElement("span")
    const duracion = document.createElement("span")
    const puntuacion = document.createElement("span")
    const imagen = document.createElement("img")

    imagen.src = movie.poster
    imagen.alt = movie.title
    puntuacion.innerText = movie.rate
    duracion.innerText = movie.duration
    direc.innerText = movie.director
    ano.innerText = movie.year
    titulo.innerText = movie.title  


    div.appendChild(titulo)
    div.appendChild(ano)
    div.appendChild(direc)
    div.appendChild(duracion)
    div.appendChild(puntuacion)
    div.appendChild(imagen)

   
})

mapear.forEach((div) => {divTarjetas.appendChild(div)});




const addMovie = () => {
    if (i>3) return alert("No hay mas peliculas");
    $.get(`https://students-api.up.railway.app/movies/${i}`,(data, status) =>{
        i++;
        movieRepository.createMovies({
            title: data.title,
            year: data.year,
            director: data.director,
            duration: data.duration,
            rate: data.rate,
            poster: data.poster
        })
    })
    mapear ()
};
addMovieButton.addEventListener("click", addMovie)    
