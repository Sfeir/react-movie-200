var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MovieList = require('./MovieList.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieForm = require('./MovieForm.jsx');
var MovieAPI = require('./api/MovieAPI');

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

    MovieAPI.getMovieList(function (movies) {
      this.setState({
        movies: movies,
        loadingMovies: false
      })
    }.bind(this));
  },

  onMovieDeletion: function (movieId) {
    var ctx = this;

    MovieAPI.removeMovie(movieId, function () {
      var filteredMovieList = ctx.state.movies.filter(function (movie) {
        return movie.id !== movieId;
      });

      ctx.setState({
        movies: filteredMovieList
      });
    });
  },

  onMovieModification: function (movieId, newData) {
    var newMovieList = this.state.movies.map(function (movie) {
      if (movie.id === movieId) {
        return {
          id: movie.id,
          afficheUrl: movie.afficheUrl,
          titre: newData.titre,
          acteurs: newData.acteurs,
          synopsis: newData.synopsis
        };
      } else {
        return movie;
      }
    });

    this.setState({
      movies: newMovieList
    });
  },

  onSearch: function (searchKey) {
    this.setState({
      searchKey: searchKey
    });
  },

  addMovie: function (movie) {
    var newMovie = {
      title: movie.titre,
      actors: movie.acteurs,
      synopsis: movie.synopsis
    };
    var ids = this.state.movies.map(function (movie) {
      return movie.id;
    });
    var maxId = Math.max.apply(null, ids) || 0;

    newMovie.id = maxId + 1;

    var newMovieList = this.state.movies.concat([newMovie]);

    this.setState({
      movies: newMovieList
    });
  },

  render: function () {
    return (
      <div>
        <Header />
        <SearchBar onSearch={this.onSearch} />
        <MovieForm onMovieFormSaved={this.addMovie} />
        <MovieList
            movies={this.state.movies}
            searchKey={this.state.searchKey}
            loadingMovies={this.state.loadingMovies}
            onMovieDeletion={this.onMovieDeletion}
            onMovieModification={this.onMovieModification} />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('main'));
