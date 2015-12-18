var React = require('react');
var Movie = require('./Movie.jsx');
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
]

var MovieList = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      loading: false
    }
  },

  componentWillMount: function () {
    var ctx = this;

    this.setState({
      loading: true
    });

    MovieAPI.getMovieList(function (movies) {
      ctx.setState({
        movies: movies,
        loading: false
      })
    });
  },

  render: function () {
    var movies = this.state.movies;
    var moviesTag = movies.map(function (movie) {
      return <Movie film={movie} />
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
