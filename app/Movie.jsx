var React = require('react');
var MovieForm = require('./MovieForm.jsx');

var Movie = React.createClass({
  getInitialState: function () {
    return {
      selected: false,
      editing: false
    }
  },

  onSelect: function () {
    this.setState({
      selected: true
    });
  },

  openEditionForm: function () {
    this.setState({
      editing: true
    });
  },

  closeEditionForm: function (event) {
    this.setState({
      editing: false
    });
  },

  onCancelModification: function (event) {
    event.preventDefault();
    this.closeEditionForm();
  },

  onMovieModification: function (newData) {
    this.props.onMovieModification(this.props.film.id, newData);

    this.closeEditionForm();
  },

  render: function () {
    var film = this.props.film,
      onMovieModification = this.props.onMovieModification,
      afficheUrl = film.poster || 'img/no-poster.jpg',
      content,
      actionButtons;

    if (this.state.selected) {
      actionButtons = (
        <div className="pull-right">
          <button className="btn btn-default" onClick={this.openEditionForm}><span className="glyphicon glyphicon-pencil"/></button>
          <button className="btn btn-danger" onClick={this.props.onMovieDeletion.bind(null, film.id)}><i className="glyphicon glyphicon-trash"></i></button>
        </div>
      );
    } else {
      actionButtons = false;
    }

    if (this.state.editing) {
      content = <MovieForm edition={true}
                          onCancel={this.onCancelModification}
                          onMovieFormSaved={this.onMovieModification} />
    } else {
      content = (
        <div>
          <img src={afficheUrl} className="col-md-2" />
          <div className="caption col-md-8 pull-left">
            <h3>{film.title}</h3>
            <p><b>Année de sortie : </b>{film.releaseYear}</p>
            <p><b>Réalisateurs : </b>{film.directors}</p>
            <p><b>Acteurs : </b>{film.actors}</p>
            <p><b>Synopsis : </b>{film.synopsis}</p>
          </div>
          {actionButtons}
        </div>
      );
    }

    return (
      <li className="col-md-12" onClick={this.onSelect}>
        {content}
      </li>
    );
  }
});

module.exports = Movie;
