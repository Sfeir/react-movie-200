var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.jsx');
var Home = require('./Home.jsx');
var Videotheque = require('./Videotheque.jsx');
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
