var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MovieList = require('./MovieList.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieAPI = require('./api/MovieAPI');

var App = React.createClass({
  getInitialState: function () {
    return {
      movies: [],
      loadingMovies: false,
      searchKey: ''
    }
  },

  componentWillMount: function () {
    this.setState({
      loadingMovies: true
    });

    MovieAPI.getMovieList().then(function (movies) {
      this.setState({
        movies: movies,
        loadingMovies: false
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

  onSearch: function (searchKey) {
    this.setState({
      searchKey: searchKey
    });
  },

  render: function () {
    var searchKey = this.state.searchKey,
        displayedMovies = this.state.movies.filter(function (movie) {
          return movie.title.toLowerCase().match(searchKey.toLowerCase());
        });

    return (
      <div>
        <Header />
        <SearchBar onSearch={this.onSearch} />
        <MovieList
            movies={displayedMovies}
            loadingMovies={this.state.loadingMovies}
            onMovieDeletion={this.onMovieDeletion} />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('main'));
