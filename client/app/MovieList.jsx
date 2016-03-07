var React = require('react');
var Movie = require('./Movie.jsx');

var MOVIES = [
  {
		id: 1,
		title : "Avatar",
		category : 'sciencesfiction',
		releaseYear : "2010",
		poster : "server/img/avatar.jpg",
		directors : "James Cameron",
		actors : "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
		synopsis : "Sur la lointaine planète de Pandora, Jake Sully, un héros malgré lui, " +
		"se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " +
		"combat héroïque pour sauver toute une civilisation.",
		rate : 3,
		lastViewDate : new Date(2013, 3, 1, 12, 4, 50),
		price : 25.46
	},
	{
		id: 2,
		title : "Seigneur des Anneaux : La Communauté de l'Anneau",
		category : 'sciencesfiction',
		releaseYear : "2001",
		poster : "server/img/seigneurdesanneaux1.jpg",
		directors : "Peter Jackson",
		actors : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
		synopsis : "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absolu" +
		"qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu." +
		" Commence alors un vaste périple visant à la destruction de l'objet.",
		rate : 5,
		lastViewDate : new Date(2012, 5, 13, 9, 30, 45),
		price : 34.76
	}
];

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

    setTimeout(function (context) {
      context.setState({
        movies: MOVIES,
        loading: false
      });
    }, 1000, this);
  },

  render: function () {
    var movies = this.state.movies;
    var moviesTag = movies.map(function (movie) {
      return <Movie data={movie} />
    });
    var content;

    if (this.state.loading) {
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
