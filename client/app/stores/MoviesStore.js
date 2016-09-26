import dispatcher from '../Dispatcher';
import actionTypes from '../actions/actionTypes';
import { EventEmitter } from 'events';

const state = {};

class MovieStore extends EventEmitter {

    get state() { return state; }
}

const store = new MovieStore();

export default store;