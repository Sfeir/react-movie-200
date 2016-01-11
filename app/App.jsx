var React = require('react');
var ReactDOM = require('react-dom');
var ReactMovie = require('./ReactMovie.jsx');
var Home = require('./Home.jsx');
var MovieList = require('./MovieList.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <Router >
        <Route path="/" component={ReactMovie}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="movies" component={MovieList} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main'));
