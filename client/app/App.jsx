/** Styles */
require('bootstrap/dist/css/bootstrap.min.css');
require('./App.css');

/** Polyfills */
require('babel-polyfill');
require('whatwg-fetch');


var React = require('react');
var ReactDOM = require('react-dom');


var Header = require('./Header.jsx');
var MovieList = require('./MovieList.jsx');
var SearchBar = require('./SearchBar.jsx');


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <SearchBar />
                <MovieList />
            </div>
        );
    }
});


ReactDOM.render(<App />, document.getElementById('main'));
