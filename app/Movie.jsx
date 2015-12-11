var React = require('react');

function Movie (props) {
  var film = props.film,
    afficheUrl = film.afficheUrl || 'img/no-poster.jpg';

  return (
    <li className="col-md-12">
      <img src={afficheUrl} className="col-md-2" />
      <div className="caption pull-left">
        <h3>{film.titre}</h3>
        <p><b>Acteurs : </b>{film.acteurs}</p>
        <p><b>Synopsis : </b>{film.synopsis}</p>
      </div>
      <div className="pull-right">
        <button className="btn btn-default" onClick={props.onMovieDeletion.bind(null, film.id)}>&times;</button>
      </div>
    </li>
  );
}


module.exports = Movie;
