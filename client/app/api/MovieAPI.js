function getMovieList () {
  return fetch('/server/api/movies')
          .then(function (response) { return response.json(); });
}

function removeMovie (id) {
  return fetch('/server/api/movies/' + id, { method: 'DELETE' });
}

var headers = {
  'Accept'        : 'application/json',
  'Content-Type'  : 'application/json'
};

function addMovie (movie) {
  return fetch('/server/api/movies/', { method: 'POST', headers : headers, body : JSON.stringify(movie) })
              .then(function (response) { return response.json(); });
}

function updateMovie (movie) {
  return fetch('/server/api/movies/' + movie.id, { method: 'PUT', headers : headers, body : JSON.stringify(movie) })
              .then(function (response) { return response.json(); });
}

function getMovie (id) {
  return fetch('/server/api/movies/' + id)
              .then(function (response) { return response.json(); });
}

module.exports = {
  getMovieList: getMovieList,
  removeMovie: removeMovie,
  addMovie: addMovie,
  updateMovie: updateMovie,
  getMovie: getMovie
}