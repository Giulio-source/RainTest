var indiceFilm = $(".indice-film").val();
const numeroFilm = $(".numero-film").val();

$(document).ready(function () {
  calcolaStats();
  if ($(".rate-cta").text() !== "Rate This") {
    $(".rate-this").off();
  }
});

if (localStorage.getItem(indiceFilm + "film")) {
  var voto = localStorage.getItem(indiceFilm + "film");
  $(".rate-cta").text(voto + "/5");
  $("#stella2 polygon").css("fill", "#f5c517");
}

function calcolaStats() {
  var filmReviews = 0;
  var filmAvgs = 0;
  for (let i = 0; i < numeroFilm; i++) {
    if (localStorage.getItem(i + " film")) {
      filmReviews++;
      filmAvgs += parseInt(localStorage.getItem(i + " film"));
      $(".films-reviewed").text(filmReviews + "/" + numeroFilm);
      var average = (filmAvgs / filmReviews).toFixed(2);
      $(".reviews-average").text(average);
    }
  }
}

$(".rate-this").click(function () {
  $(".rate-panel").css("opacity", "1");
});

$(".rating-stella").mouseover(function () {
  $(this).prevAll().addClass("active");
  $(".active polygon").css("fill", "#f5c517");
  $("polygon", this).css("fill", "#f5c517");
});
$(".rating-stella").mouseout(function () {
  $(this).prevAll().removeClass("active");
  $(".active polygon").css("fill", "rgba(0,0,0,0)");
  $("polygon", this).css("fill", "rgba(0,0,0,0)");
  $("polygon", this).css("fill", "rgba(0,0,0,0)");
});

$(".rating-stella").click(function () {
  var idStella = $(this).attr("id");
  var voto = idStella.charAt(0);
  $(".rate-panel").hide();
  $(".rate-cta").text(voto + "/5");
  $("#stella2 polygon").css("fill", "#f5c517");
  localStorage.setItem(indiceFilm + "film", voto);
  calcolaStats();
});
