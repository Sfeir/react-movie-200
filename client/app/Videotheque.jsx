var React = require('react');
var Movie = require('./Movie.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieForm = require('./MovieForm.jsx');
var MovieAPI = require('./api/MovieAPI.js');

var Link = require('react-router').Link;

var Videotheque = React.createClass({
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
    var movies = this.state.movies;
    var onMovieDeletion = this.onMovieDeletion;
    var onMovieModification = this.onMovieModification;
    var searchKey = this.state.searchKey;
    var moviesTag = movies.filter(function (movie) {
                        return movie.title.toLowerCase().match(searchKey.toLowerCase());
                      })
                      .map(function (movie) {
                        return (
                          <li className="list-group-item" key={movie.id}>
                                <Link to={'/movie/' + movie.id}>{movie.title}</Link>
                          </li>
                          );
                      });
    var content;
    var firstMovie;

    if (this.state.loadingMovies) {
      content = <li>Chargement de la liste des films en cours</li>
      firstMovie = false;
    } else {
      content = moviesTag;
      firstMovie = <Movie data={movies[0]} />;
    }

    return (
      <div>
        <header className="page-header">
          <h1>
            Ma vidéothèque <small>{movies.length} films</small> <Link className="btn btn-success" to="/movie/new">Ajouter</Link>
          </h1>
        </header>
        <SearchBar onSearch={this.onSearch} />
        <ul className="col-md-4 list-group">
          {content}
        </ul>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Videotheque;
