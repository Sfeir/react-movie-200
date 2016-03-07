var React = require('react');
var MovieForm = require('./MovieForm.jsx');
var _ = require('lodash');

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
    var updatedMovie = _.merge(this.props.data, newData);

    this.props.onMovieModification(updatedMovie);

    this.closeEditionForm();
  },

  render: function () {
    var data = this.props.data,
        afficheUrl = data.poster || 'img/no-poster.jpg',
        actionButtons,
        content;

    if (this.state.selected) {
      actionButtons = (
        <div className="pull-right">
          <button className="btn btn-default" onClick={this.openEditionForm}><i className="glyphicon glyphicon-pencil" /></button>
          <button className="btn btn-danger" onClick={this.props.onMovieDeletion.bind(null, data.id)}><i className="glyphicon glyphicon-trash" /></button>
        </div>
      );
    } else {
      actionButtons = false;
    }

    if (this.state.editing) {
      content = <MovieForm edition={true}
                          movie={this.props.data}
                          onCancel={this.onCancelModification}
                          onMovieFormSaved={this.onMovieModification} />
    } else {
      content = (
            <div>
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
