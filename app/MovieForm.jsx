var React = require('react');

var MovieForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    this.props.onMovieFormSaved({
      titre: this.refs.movieTitle.value,
      acteurs: this.refs.movieActors.value,
      synopsis: this.refs.movieSynopsis.value,
    });

    this.resetForm();
  },

  resetForm: function () {
    this.refs.movieTitle.value = '';
    this.refs.movieActors.value = '';
    this.refs.movieSynopsis.value = '';
  },

  render: function () {
    var cancelBtn = this.props.edition ? <button className="btn btn-danger pull-right" onClick={this.props.onCancel}>Cancel</button> : false;

    return (
      <form className="movie-form" onSubmit={this.onSubmit}>
        <h3 className="col-md-12">{this.props.edition ? 'Edit a movie' : 'Add a movie'}</h3>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Title</label>
            <input ref="movieTitle" type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Actors</label>
            <input ref="movieActors" type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group col-md-11">
            <label>Synopsis</label>
            <textarea ref="movieSynopsis" className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          {cancelBtn}
          <input type="submit" className="btn btn-primary pull-right" value="Save" />
        </div>
      </form>
    );
  }
});

module.exports = MovieForm;
