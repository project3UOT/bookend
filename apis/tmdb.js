var Crime = 80; 
var Fantasy = 14;
var History = 36;
var Horror = 27;
var Music = 10402;
var Mystery = 9648;
var Romance = 10749
var Science_Fiction = 878;
var Tv_Movie = 10770
var Thriller = 53;
var War = 10752;
var Western = 37;

var tmdbCall = "https://api.themoviedb.org/3/discover/movie?api_key=c64af18e2c39fd4b2b69e2b87712c64e&language=en-US&with_genres=";


function loadGenres() {
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c64af18e2c39fd4b2b69e2b87712c64e&language=en-US")
  .then(function(response){
      return response.json();        
  })
  .then(function(data){
      genres = data.genres;
      let buttonHolderEl;
      for (var i = 0; i < genres.length; i++) {
          let genreItemHolderEl = document.createElement("div");
          if (i%2 == 0) {
              buttonHolderEl = document.createElement("div");
              buttonHolderEl.setAttribute("class", "button-holder");
          };