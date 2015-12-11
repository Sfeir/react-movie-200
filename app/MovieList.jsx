var React = require('react');
var Movie = require('./Movie.jsx');

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
  render: function () {
    var movies = MOVIES.map(function (movie) {
      return <Movie film={movie} />
    });

    return (
      <ul className="thumbnails list-unstyled">
        {movies}
      </ul>
    );
  }
});

module.exports = MovieList;
