const express = require("express");
const bodyParser = require("body-parser");

const jsonData = require("./public/films.json");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

var indice = 0;
var title = "";
var year = "";
var rated = "";
var released = "";
var runtime = "";
var genre = "";
var director = "";
var writer = "";
var actors = "";
var plot = "";
var language = "";
var country = "";
var awards = "";
var poster = "";
var metascore = "";
var imdbrating = "";
var imdbvotes = "";
var imdbid = "";
var images = [];

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/scheda-film", function (req, res) {
  indice = req.body.indice;
  var numeroFilm = Object.keys(jsonData).length;

  jsonData.forEach((film, index) => {
    if (index == indice) {
      title = film.Title;
      year = film.Year;
      rated = film.Rated;
      released = film.Released;
      runtime = film.Runtime;
      genre = film.Genre;
      director = film.Director;
      writer = film.Writer;
      actors = film.Actors;
      plot = film.Plot;
      language = film.Language;
      country = film.Country;
      awards = film.Awards;
      poster = film.Poster;
      metascore = film.Metascore;
      imdbrating = film.imdbRating;
      imdbvotes = film.imdbVotes;
      imdbid = film.imdbID;
      images = film.Images;
    }
  });

  res.render("detail", {
    numeroFilm: numeroFilm,
    indice: indice,
    title: title,
    year: year,
    rated: rated,
    released: released,
    runtime: runtime,
    genre: genre,
    director: director,
    writer: writer,
    actors: actors,
    plot: plot,
    language: language,
    country: country,
    awards: awards,
    poster: poster,
    metascore: metascore,
    imdbrating: imdbrating,
    imdbvotes: imdbvotes,
    images: images,
  });
});

app.listen(3000, function () {
  console.log("Server has started");
});
