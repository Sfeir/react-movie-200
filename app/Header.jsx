var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {
    return (
      <header className="navbar navbar-default">
          <section className="container-fluid">
            <Link className="navbar-brand" to="/home">ReactMovie</Link>
            <ul className="nav navbar-nav">
              <li><a>Mes films</a></li>
            </ul>
          </section>
      </header>
    );
  }
})

module.exports = Header;
