import dispatcher from '../Dispatcher';
import ActionTypes from '../actions/ActionTypes';
import { EventEmitter } from 'events';


let state = {
    movies: [],
    movie : {},
    searchKey : '',
    displayedMovies : []
};

class MovieStore extends EventEmitter {

    get state() { return state; }

    emitChange(data) {
        this.emit( 'change', data );
    }

    addChangeListener(callback) {
        this.on( 'change', callback )
    }

    removeChangeListener( callback ) {
        this.removeListener( 'change', callback );
    }
}

const store = new MovieStore();

export default store;


dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.FETCH_MOVIES:
            state.movies = action.movies;
            break;
        case ActionTypes.FIND_MOVIE:
            state.movie = action.movie;
            break;
        case ActionTypes.SEARCH_MOVIES:
            state.searchKey = action.searchKey;
            break;
        case ActionTypes.ADD_MOVIE:
            state.movies.push(action.newMovie);
            break;
        case ActionTypes.DELETE_MOVIE:
            // action.movieId est une String et movie.id est un Number, d'où le != au lieu du !==
            state.movies = state.movies.filter((movie) => movie.id != action.movieId);
            break;
        case ActionTypes.UPDATE_MOVIE:
            state.movies = state.movies.map(movie => movie.id == action.movie.id ? action.movie : movie);
            break;
        default:
            return;
    }

    state.displayedMovies = state.movies.filter( movie => movie.title.toLowerCase().match( state.searchKey.toLowerCase() ) );

    store.emitChange(state);
});