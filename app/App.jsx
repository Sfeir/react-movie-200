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

    MovieAPI.getMovieList().then(function (movies) {
      this.setState({
        movies: movies,
        loadingMovies: false
      })
    }.bind(this));
  },

  onMovieDeletion: function (movieId) {
    MovieAPI.removeMovie(movieId).then(function () {
      var filteredMovieList = this.state.movies.filter(function (movie) {
        return movie.id !== movieId;
      });

      this.setState({
        movies: filteredMovieList
      });
    }.bind(this));
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

    MovieAPI.addMovie(newMovie).then(function (movie) {
      var newMovieList = this.state.movies.concat([movie]);
      
      this.setState({
        movies: newMovieList
      });
    }.bind(this));
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
