var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MovieList = require('./MovieList.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieForm = require('./MovieForm.jsx');
var MovieAPI = require('./api/MovieAPI');

var MOVIES = [
  {
    id: 1,
    titre: 'AVATAR',
    afficheUrl: 'img/avatar.jpg',
    acteurs: 'Bruce Willis, Bruce Willis & Bruce Willis',
    synopsis: 'Il se passe des trucs dans ce film'
  },
  {
    id: 2,
    titre: 'REC',
    afficheUrl: 'img/rec.jpg',
    acteurs: "Des gens, et d'autres gens.",
    synopsis: 'Il se passe aussi des trucs dans ce film'
  }
];

var App = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      loadingMovies: false,
      searchKey: ''
    }
  },

  componentWillMount: function () {
    var ctx = this;

    this.setState({
      loadingMovies: true
    });

    MovieAPI.getMovieList(function (movies) {
      ctx.setState({
        movies: movies,
        loadingMovies: false
      })
    });
  },

  onMovieDeletion: function (movieId) {
    var filteredMovieList = this.state.movies.filter(function (movie) {
      return movie.id !== movieId;
    });

    this.setState({
      movies: filteredMovieList
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
      titre: movie.titre,
      acteurs: movie.acteurs,
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
