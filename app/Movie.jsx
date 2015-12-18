var React = require('react');

function Movie (props) {
  var film = props.film,
    afficheUrl = film.poster || 'img/no-poster.jpg';

  return (
    <li className="col-md-12">
      <img src={afficheUrl} className="col-md-2" />
      <div className="caption col-md-8 pull-left">
        <h3>{film.title}</h3>
        <p><b>Année de sortie : </b>{film.releaseYear}</p>
        <p><b>Réalisateurs : </b>{film.directors}</p>
        <p><b>Acteurs : </b>{film.actors}</p>
        <p><b>Synopsis : </b>{film.synopsis}</p>
        <p><b>Prix : </b>{film.price} €</p>
      </div>
      <div className="pull-right">
        <button className="btn btn-default" onClick={props.onMovieDeletion.bind(null, film.id)}>&times;</button>
      </div>
    </li>
  );
}


module.exports = Movie;
