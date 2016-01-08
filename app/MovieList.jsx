var React = require('react');
var Movie = require('./Movie.jsx');
var MovieAPI = require('./api/MovieAPI');

var MovieList = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      loading: false
    }
  },

  componentWillMount: function () {
    this.setState({
      loading: true
    });

    MovieAPI.getMovieList().then(function (movies) {
      this.setState({
        movies: movies,
        loading: false
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

  render: function () {
    var movies = this.state.movies;
    var onMovieDeletion = this.onMovieDeletion;
    var moviesTag = movies.map(function (movie) {
      return <Movie film={movie} onMovieDeletion={onMovieDeletion} />
    });
    var content;

    if (this.state.loading) {
      content = <li>Chargement de la liste des films en cours</li>
    } else {
      content = moviesTag;
    }

    return (
      <ul className="thumbnails list-unstyled">
        {content}
      </ul>
    );
  }
});

module.exports = MovieList;
