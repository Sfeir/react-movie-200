var React = require('react');
var Link = require('react-router').Link;
var MoviesStore = require('../stores/MoviesStore');
var MoviesActionCreator = require('../actions/MoviesActionCreator');


var MovieList = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      searchKey: ''
    };
  },

  componentWillMount: function () {
    MoviesStore.addChangeListener(this.updateMovies);
  },

  componentDidMount: function () {
    MoviesActionCreator.fetchMovies();
  },

  componentWillUnmount: function () {
    MoviesStore.removeChangeListener(this.updateMovies);
  },

  updateMovies: function () {
    var state = MoviesStore.getState();
    this.setState({
      movies : state.movies
    });
  },

  render: function () {
    var movies = this.state.movies;
    var onMovieDeletion = this.props.onMovieDeletion;
    var onMovieModification = this.props.onMovieModification;
    var searchKey = this.state.searchKey;
    var moviesTag = movies.filter(function (movie) {
                        return movie.title.toLowerCase().match(searchKey.toLowerCase());
                      })
                      .map(function (movie) {
                        return <li className="list-group-item" key={movie.id}><Link to={'/movie/' + movie.id}>{movie.title}</Link></li>;
                      });
    var content;

    if (this.props.loadingMovies) {
      content = <li>Chargement de la liste des films en cours</li>
    } else {
      content = moviesTag;
    }

    return (
      <div>
        <header className="page-header">
          <h1>Ma vidéothèque <small>{movies.length} films</small> <Link to="/movie/new" className="btn btn-success">Ajouter</Link></h1>
        </header>
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

module.exports = MovieList;
