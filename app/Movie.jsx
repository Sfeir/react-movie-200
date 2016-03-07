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
    var data = this.props.data,
        afficheUrl = data.poster || 'img/no-poster.jpg',
        actionButtons;

    if (this.state.selected) {
      actionButtons = (
        <div className="pull-right">
          <button className="btn btn-default"><i className="glyphicon glyphicon-pencil" /></button>
          <button className="btn btn-danger" onClick={this.props.onMovieDeletion.bind(null, data.id)}><i className="glyphicon glyphicon-trash" /></button>
        </div>
      );
    } else {
      actionButtons = false;
    }

    return (
      <li className="col-md-12" onClick={this.onSelect}>
        <img src={afficheUrl} className="col-md-2" />
        <div className="caption col-md-8 pull-left">
          <h3>{data.title}</h3>
          <p><b>Année de sortie : </b>{data.releaseYear}</p>
          <p><b>Réalisateurs : </b>{data.directors}</p>
          <p><b>Acteurs : </b>{data.actors}</p>
          <p><b>Synopsis : </b>{data.synopsis}</p>
          <p><b>Prix : </b>{data.price} €</p>
        </div>
        {actionButtons}
      </li>
    );
  }
});

module.exports = Movie;
