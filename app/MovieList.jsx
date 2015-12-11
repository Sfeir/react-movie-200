var React = require('react');
var Movie = require('./Movie.jsx');



var MovieList = React.createClass({
  render: function () {
    var movies = this.props.movies;
    var onMovieDeletion = this.props.onMovieDeletion;
    var searchKey = this.props.searchKey;
    var moviesTag = movies.filter(function (movie) {
                        return movie.titre.toLowerCase().match(searchKey.toLowerCase());
                      })
                      .map(function (movie) {
                        return <Movie key={movie.id} film={movie} onMovieDeletion={onMovieDeletion} />
                      });
    var content;

    if (this.props.loadingMovies) {
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
