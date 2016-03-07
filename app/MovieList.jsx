var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  render: function () {
    var movies = this.props.movies;
    var moviesTag = movies.map(function (movie) {
      return <Movie key={movie.id} data={movie} onMovieDeletion={this.props.onMovieDeletion} />
    }.bind(this));
    var content;

    if (this.props.loadingMovies) {
      content = <li>Chargement des films en cours</li>
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
