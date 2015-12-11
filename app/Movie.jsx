var React = require('react');

var Movie = React.createClass({
  getInitialState: function () {
    return {
      selected: false
    }
  },

  onSelect: function () {
    this.setState({
      selected: true
    });
  },

  render: function () {
    var film = this.props.film,
      afficheUrl = film.afficheUrl || 'img/no-poster.jpg',
      actionButtons;

    if (this.state.selected) {
      actionButtons = (
        <div className="pull-right">
          <button className="btn btn-default" onClick={this.props.onMovieDeletion.bind(null, film.id)}>&times;</button>
        </div>
      );
    } else {
      actionButtons = false;
    }

    return (
      <li className="col-md-12" onClick={this.onSelect}>
        <img src={afficheUrl} className="col-md-2" />
        <div className="caption pull-left">
          <h3>{film.titre}</h3>
          <p><b>Acteurs : </b>{film.acteurs}</p>
          <p><b>Synopsis : </b>{film.synopsis}</p>
        </div>
        {actionButtons}
      </li>
    );
  }
});


module.exports = Movie;
