/** Styles */
require('bootstrap/dist/css/bootstrap.min.css');
require('./App.css');

/** Polyfills */
require('babel-polyfill');
require('whatwg-fetch');


var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header.jsx');
var Videotheque = require('./Videotheque.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieAPI = require('./api/MovieAPI.js');
var MovieForm = require('./MovieForm.jsx');


var App = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      loadingMovies: false,
      searchKey: ''
    }
  },

  componentWillMount: function () {
    this.setState({
      loadingMovies: true
    });

    MovieAPI.getMovieList().then(function (movies) {
      this.setState({
        movies: movies,
        loadingMovies: false
      });
    }.bind(this));
  },

  onMovieDeletion: function (movieId) {
    MovieAPI.removeMovie(movieId).then(function () {
      var filteredMovieList = this.state.movies.filter(function (movie) {
        return movie.id !== movieId;
      });

      this.setState({
        movies: filteredMovieList
      })
    }.bind(this));
  },

  addMovie: function (movie) {
    var newMovie = {
      title: movie.title,
      actors: movie.actors,
      synopsis: movie.synopsis
    };

    MovieAPI.addMovie(newMovie).then(function (movie) {
      var newMovieList = this.state.movies.concat([movie]);

      this.setState({
        movies: newMovieList
      });
    }.bind(this));
  },

  onSearch: function (searchKey) {
    this.setState({
      searchKey: searchKey
    });
  },

  onMovieModification: function (newData) {
    MovieAPI.updateMovie(newData).then(function () {
      var newMovieList = this.state.movies.map(function (movie) {
        if (movie.id === newData.id) {
          return newData;
        } else {
          return movie;
        }
      });

      this.setState({
        movies: newMovieList
      });
    }.bind(this));
  },

  render: function () {
    var searchKey = this.state.searchKey;

    return (
      <div>
        <Header />
        <SearchBar onSearch={this.onSearch} />
        <MovieForm onMovieFormSaved={this.addMovie} />
        <Videotheque
          searchKey={this.state.searchKey}
          movies={this.state.movies}
          loadingMovies={this.state.loadingMovies}
          onMovieDeletion={this.onMovieDeletion}
          onMovieModification={this.onMovieModification} />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('main'));

