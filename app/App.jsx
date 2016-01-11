var React = require('react');
var ReactDOM = require('react-dom');
var ReactMovie = require('./ReactMovie.jsx');
var Home = require('./Home.jsx');
var MovieList = require('./MovieList.jsx');
var Movie = require('./Movie.jsx');
var MovieForm = require('./MovieForm.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var createHashHistory = require('history/lib/createHashHistory');
var history = createHashHistory({
  queryKey: false
});

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
