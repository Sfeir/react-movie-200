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
	}
};
