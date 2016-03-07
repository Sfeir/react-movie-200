function getMovieList () {
  return fetch('/server/api/movies')
          .then(function (response) { return response.json(); });
}

module.exports = {
  getMovieList: getMovieList
}
