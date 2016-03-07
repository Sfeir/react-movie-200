function getMovieList () {
  return fetch('/server/api/movies')
          .then(function (response) { return response.json(); });
}

function removeMovie (id) {
  return fetch('/server/api/movies/' + id, { method: 'DELETE' });
}

module.exports = {
  getMovieList: getMovieList,
  removeMovie: removeMovie
}