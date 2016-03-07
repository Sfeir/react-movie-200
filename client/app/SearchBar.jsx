var React = require('react');

var SearchBar = React.createClass({
  render: function () {
    return (
        <div className="search-bar-container input-group">
          <input type="text" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Search</button>
          </span>
        </div>
    );
  }
});

module.exports = SearchBar;
