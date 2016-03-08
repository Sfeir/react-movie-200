var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./Header.jsx');
var Videotheque = require('./Videotheque.jsx');
var Home = require('./Home.jsx');


var App = React.createClass({


  render: function () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
