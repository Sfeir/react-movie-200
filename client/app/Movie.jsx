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
        afficheUrl = data.poster || 'server/img/no-poster.jpg',
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
        <div className="row">
          <img src={afficheUrl} className="col-md-3" />
          <div className="caption col-md-9">
            <h3>{data.title} {actionButtons} </h3>
            <p><b>Année de sortie : </b>{data.releaseYear}</p>
            <p><b>Réalisateurs : </b>{data.directors}</p>
            <p><b>Acteurs : </b>{data.actors}</p>
            <p><b>Synopsis : </b>{data.synopsis}</p>
            <p><b>Vu le : </b>{data.lastViewDate}</p>
            <p><b>Prix : </b>{data.price}</p>
            <p><b>Note : </b>{data.rate}</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>

    );
  }
});

module.exports = Movie;
