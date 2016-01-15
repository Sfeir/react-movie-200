var dispatcher = require('../dispatcher');
var actionTypes = require('./actionTypes');
var MovieAPI = require('../api/MovieAPI');

module.exports = {
  fetchMovies: function () {
    MovieAPI.getMovieList()
      .then(function (movies) {
        dispatcher.dispatch({
          actionType: actionTypes.FETCH_MOVIES,
          movies: movies
        });
      });
  },
  findMovie: function (id) {
    MovieAPI.getMovie(id)
      .then(function (movie) {
         dispatcher.dispatch({
           actionType: actionTypes.FIND_MOVIE,
           movie: movie
         });
      });
  },
  searchMovie: function (searchKey) {
    dispatcher.dispatch({
      actionType: actionTypes.SEARCH_MOVIE,
      searchKey: searchKey
    });
  },
  addMovie: function (newMovie) {
    MovieAPI.addMovie(newMovie)
      .then(function (movie) {
        dispatcher.dispatch({
          actionType: actionTypes.ADD_MOVIE,
          newMovie: movie
        })
      });
  },
  deleteMovie: function (id) {
    MovieAPI.removeMovie(id)
      .then(function () {
        dispatcher.dispatch({
          actionType: actionTypes.DELETE_MOVIE,
          movieId: id
        });
      });
  }
};
