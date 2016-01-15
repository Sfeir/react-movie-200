var React = require('react');
var ReactDOM = require('react-dom');
var ReactMovie = require('./components/ReactMovie.jsx');
var Home = require('./components/Home.jsx');
var MovieList = require('./components/MovieList.jsx');
var Movie = require('./components/Movie.jsx');
var MovieForm = require('./components/MovieForm.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = require('./history');

var App = React.createClass({
  render: function () {
    return (
      <Router history={history}>
        <Route path="/" component={ReactMovie}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="movies" component={MovieList}>
            <Route path="/movie/new" component={MovieForm} />
            <Route path="/movie/:id" component={Movie} />
          </Route>
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main'));
