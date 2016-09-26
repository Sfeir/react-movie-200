import dispatcher from '../Dispatcher';
import actionTypes from '../actions/ActionTypes';
import { EventEmitter } from 'events';


let state = {
    movies: []
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
        case actionTypes.FETCH_MOVIES:
            state.movies = action.movies;
            break;
        default:
            return;
    }

    store.emitChange(state);
});