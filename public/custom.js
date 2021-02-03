$.getJSON("films.json", function (films) {
  $.each(films, function (i, film) {
    $(".list-films").append(
      `<form action="/scheda-film" method="post">
      <input name="indice" type="hidden" value="${i}"></input>
      <input name="film" type="submit" value="${film.Title}"></input>
      </form>`
    );
  });
});

$(".search-icon").click(function () {
  var value = $(".search-input").val();
  searchFilms(value);
});

$(document).on("keypress", function (e) {
  if (e.which == 13) {
    var value = $(".search-input").val();
    searchFilms(value);
  }
});

function searchFilms(value) {
  if (value == "") {
    $("input[name=film]").closest("form").show();
  }
  $(".list-films input[name='film']").each(function () {
    var nomeFilm = $(this).val();
    if (nomeFilm.toLowerCase().includes(value.toLowerCase())) {
      $(this).addClass("show");
    } else {
      $(this).addClass("hide");
    }
  });
  $(".hide").closest("form").hide();
  $(".show").removeClass("show");
  $(".hide").removeClass("hide");
}
