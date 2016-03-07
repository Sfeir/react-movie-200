var React = require('react');

var Movie = React.createClass({
  render: function () {
    var data = this.props.data,
        afficheUrl = data.poster || 'server/img/no-poster.jpg';

    return (
      <li className="col-md-12">
        <img src={afficheUrl} className="col-md-2" />
        <div className="caption">
          <h3>{data.title}</h3>
          <p><b>Année de sortie : </b>{data.releaseYear}</p>
          <p><b>Réalisateurs : </b>{data.directors}</p>
          <p><b>Acteurs : </b>{data.actors}</p>
          <p><b>Synopsis : </b>{data.synopsis}</p>
          <p><b>Prix : </b>{data.price} €</p>
        </div>
      </li>
    );
  }
});

module.exports = Movie;
