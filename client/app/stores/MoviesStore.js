var dispatcher = require('../dispatcher');
var actionTypes = require('../actions/actionTypes');
var EventEmitter = require('events').EventEmitter;

var state = {};

var MoviesStore = _.assign({}, EventEmitter.prototype, {

});

module.exports = MoviesStore;
