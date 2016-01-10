var React = require('react');
var ReactDOM = require('react-dom');
var ReactMovie = require('./ReactMovie.jsx');

var App = React.createClass({
  render: function () {
    return <ReactMovie />;
  }
});

ReactDOM.render(<App />, document.getElementById('main'));
