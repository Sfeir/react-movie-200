var React = require('react');
var Movie = require('./Movie.jsx');



var MovieList = React.createClass({
  shouldComponentUpdate: function (nextProps) {
    return this.props.searchKey !== nextProps.searchKey || this.props.movies !== nextProps.movies;
  },

  render: function () {
    var movies = this.props.movies;
    var onMovieDeletion = this.props.onMovieDeletion;
    var onMovieModification = this.props.onMovieModification;
    var searchKey = this.props.searchKey;
    var moviesTag = movies.filter(function (movie) {
                        return movie.titre.toLowerCase().match(searchKey.toLowerCase());
                      })
                      .map(function (movie) {
                        return <Movie
                                    key={movie.id}
                                    film={movie}
                                    onMovieDeletion={onMovieDeletion}
                                    onMovieModification={onMovieModification} />
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
