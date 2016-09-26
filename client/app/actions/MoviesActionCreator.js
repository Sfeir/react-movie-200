import dispatcher from '../Dispatcher';
import actionTypes from './ActionTypes';
import * as MovieApi from '../api/MovieApi';

export function fetchMovies() {
    MovieApi.getMovieList().then(movies => {
        dispatcher.dispatch({
            actionType : actionTypes.FETCH_MOVIES,
            movies
        });
    });
}