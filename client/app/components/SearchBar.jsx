var React = require('react');

var SearchBar = React.createClass({
  onSearch: function () {
    var searchKey = this.refs.searchBar.value;

    this.props.onSearch(searchKey);
  },

  render: function () {
    return (
        <div className="search-bar-container input-group">
          <input type="text" className="form-control" placeholder="Search for..." ref="searchBar" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.onSearch}>Search</button>
          </span>
        </div>
    );
  }
});

module.exports = SearchBar;
