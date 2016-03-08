/** Styles */
require('bootstrap/dist/css/bootstrap.min.css');
require('./App.css');

/** Polyfills */
require('babel-polyfill');
require('whatwg-fetch');

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./App.jsx');
var Home = require('./Home.jsx');
var Videotheque = require('./Videotheque.jsx');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// Faire le routing ici
var Main = React.createClass({
  render: function () {
    return (
      <Router history={ReactRouter.hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="movies" component={Videotheque} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('main'));
