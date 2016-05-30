var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.jsx');
var Home = require('./components/Home.jsx');
var Videotheque = require('./components/Videotheque.jsx');
var Movie = require('./components/Movie.jsx');
var MovieForm = require('./components/MovieForm.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = require('./history');

// Faire le routing ici
var Main = React.createClass({
  render: function () {
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="movies" component={Videotheque}>
            <Route path="/movie/new" component={MovieForm} />
            <Route path="/movie/:id" component={Movie} />
          </Route>
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));
