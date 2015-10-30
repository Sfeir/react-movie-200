var React = require('react');
var Movie = require('./Movie.jsx');

var MOVIES = [
  {
    titre: 'AVATAR',
    afficheUrl: 'img/avatar.jpg',
    acteurs: 'Bruce Willis, Bruce Willis & Bruce Willis',
    synopsis: 'Il se passe des trucs dans ce film'
  },
  {
    titre: 'REC',
    afficheUrl: 'img/rec.jpg',
    acteurs: "Des gens, et d'autres gens.",
    synopsis: 'Il se passe aussi des trucs dans ce film'
  }
]

function MovieList () {
  return (
    <ul className="thumbnails list-unstyled">
      <Movie film={MOVIES[0]} />
      <Movie film={MOVIES[1]} />
    </ul>
  );
}

module.exports = MovieList;
