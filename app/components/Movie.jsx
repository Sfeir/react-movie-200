var React = require('react');
var MovieForm = require('./MovieForm.jsx');
var _ = require('lodash');
var MovieApi = require('../api/MovieAPI');
var MoviesStore = require('../stores/MoviesStore');
var MoviesActionCreator = require('../actions/MoviesActionCreator');
var history = require('../history');

var Movie = React.createClass({
  getInitialState: function () {
    return {
      selected: false,
      editing: false,
      movie: {}
    }
  },

  onSelect: function () {
    this.setState({
      selected: true
    });
  },

  openEditionForm: function () {
    this.setState({
      editing: true
    });
  },

  closeEditionForm: function (event) {
    this.setState({
      editing: false
    });
  },

  onCancelModification: function (event) {
    event.preventDefault();
    this.closeEditionForm();
  },

  onMovieModification: function (newData) {
    var updatedMovie = _.merge(this.state.movie, newData);

    this.props.onMovieModification(updatedMovie);

    this.closeEditionForm();
  },

  componentWillMount: function () {
    MoviesStore.addChangeListener(this.updateMovie);
  },

  componentDidMount: function () {
    this.findMovie();
  },

  componentWillUnmount: function () {
    MoviesStore.removeChangeListener(this.updateMovie);
  },

  findMovie: function () {
    MoviesActionCreator.findMovie(this.props.params.id);
  },

  updateMovie: function () {
    var state = MoviesStore.getState();

    this.setState({
        movie: state.movie
    });
  },

  deleteMovie: function () {
    MoviesActionCreator.deleteMovie(this.props.params.id);
    history.replaceState(null, '/movies');
  },

  componentDidUpdate: function (prevProps) {
    let oldId = prevProps.params.id;
    let newId = this.props.params.id;

    if (newId && oldId !== newId) {
      this.findMovie();
    }
  },

  render: function () {
    var movie = this.state.movie,
      onMovieModification = this.props.onMovieModification,
      afficheUrl = movie.poster || 'img/no-poster.jpg',
      content,
      actionButtons;

    if (this.state.selected) {
      actionButtons = (
        <div className="pull-right">
          <button className="btn btn-default"><span className="glyphicon glyphicon-pencil"/></button>
          <button className="btn btn-danger" onClick={this.deleteMovie}><i className="glyphicon glyphicon-trash"></i></button>
        </div>
      );
    } else {
      actionButtons = false;
    }

    if (this.state.editing) {
      content = <MovieForm edition={true}
                          movie={this.state.movie}
                          onCancel={this.onCancelModification}
                          onMovieFormSaved={this.onMovieModification} />
    } else {
      content = (
        <div className="row" onClick={this.onSelect}>
          <img src={afficheUrl} className="col-md-3" />
          <div className="caption col-md-9">
            <h3>{movie.title} {actionButtons} </h3>
            <p><b>Année de sortie : </b>{movie.releaseYear}</p>
            <p><b>Réalisateurs : </b>{movie.directors}</p>
            <p><b>Acteurs : </b>{movie.actors}</p>
            <p><b>Synopsis : </b>{movie.synopsis}</p>
            <p><b>Vu le : </b>{movie.lastViewDate}</p>
            <p><b>Prix : </b>{movie.price}</p>
            <p><b>Note : </b>{movie.rate}</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = Movie;
