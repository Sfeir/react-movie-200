var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var MovieList = require('./MovieList.jsx');
var SearchBar = require('./SearchBar.jsx');
var MovieAPI = require('./api/MovieAPI.js');

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
      });
    }.bind(this));
  },

  onMovieDeletion: function (movieId) {
    MovieAPI.removeMovie(movieId).then(function () {
      var filteredMovieList = this.state.movies.filter(function (movie) {
        return movie.id !== movieId;
      });

      this.setState({
        movies: filteredMovieList
      })
    }.bind(this));
  },

  onSearch: function (searchKey) {
    this.setState({
      searchKey: searchKey
    });
  },

  render: function () {
    var searchKey = this.state.searchKey;

    return (
      <div>
        <Header />
        <SearchBar onSearch={this.onSearch} />
        <MovieList
          searchKey={this.state.searchKey}
          movies={this.state.movies}
          loadingMovies={this.state.loadingMovies}
          onMovieDeletion={this.onMovieDeletion} />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('main'));
