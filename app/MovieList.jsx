var React = require('react');
var Movie = require('./Movie.jsx');

var MovieList = React.createClass({
  shouldComponentUpdate: function (nextProps) {
    return this.props.searchKey !== nextProps.searchKey || this.props.movies !== nextProps.movies;
  },

  render: function () {
    var movies = this.props.movies;
    var searchKey = this.props.searchKey;
    var moviesTag = movies.filter(function (movie) {
                      return movie.title.toLowerCase().match(searchKey.toLowerCase());
                    })
                    .map(function (movie) {
                      return <Movie
                                key={movie.id}
                                data={movie}
                                onMovieDeletion={this.props.onMovieDeletion}
                                onMovieModification={this.props.onMovieModification} />
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
