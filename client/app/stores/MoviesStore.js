var dispatcher = require('../dispatcher');
var actionTypes = require('../actions/actionTypes');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var state = {
	movies: [],
	movie: {},
	searchKey: '',
	displayedMovies: []
};


var MoviesStore = _.assign({}, EventEmitter.prototype, {
	getState: function () {
		return state;
	},

	emitChange: function () {
		this.emit('change');
	},

	addChangeListener: function (callback) {
		this.on('change', callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener('change', callback);
	}
});

dispatcher.register(function (action) {
	switch (action.actionType) {
		case actionTypes.FETCH_MOVIES:
			state.movies = action.movies;
			break;
		case actionTypes.FIND_MOVIE:
			state.movie = action.movie;
			break;
		case actionTypes.SEARCH_MOVIE:
			state.searchKey = action.searchKey;
			break;
		case actionTypes.ADD_MOVIE:
			state.movies.push(action.newMovie);
			break;
		case actionTypes.DELETE_MOVIE:
			state.movies = state.movies.filter(function (movie) {
				// action.movieId est une String et movie.id est un Number, d'où le != au lieu du !==
				return movie.id != action.movieId;
			});
			break;
		case actionTypes.UPDATE_MOVIE:
			state.movies = state.movies.map(function (movie) {
				if (movie.id == action.movie.id) {
					return action.movie;
				} else {
					return movie;
				}
			});
			break;
		default:
			return true;
	}

	state.displayedMovies = _.filter(state.movies, function (movie) {
		var title = movie.title || '';
		return title.toLowerCase().match(state.searchKey.toLowerCase());
	});

	MoviesStore.emitChange();

	return true;
});

module.exports = MoviesStore;
