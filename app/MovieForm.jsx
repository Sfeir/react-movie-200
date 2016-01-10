var React = require('react');

var MovieForm = React.createClass({
  getDefaultProps: function () {
    return {
      movie: {
        title: '',
        actors: '',
        synopsis: ''
      }
    };
  },

  componentDidMount: function () {
    this.refs.movieTitle.value = this.props.movie.title;
    this.refs.movieActors.value = this.props.movie.actors;
    this.refs.movieSynopsis.value = this.props.movie.synopsis;
  },

  onSubmit: function (e) {
    e.preventDefault();

    this.props.onMovieFormSaved({
      title: this.refs.movieTitle.value,
      actors: this.refs.movieActors.value,
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
    var saveButton = this.props.movie && this.props.movie.id ? <button type="submit" className="btn btn-primary">Modifier</button> : <button type="submit" className="btn btn-primary">Ajouter</button>;

    return (
      <form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-4 control-label">Titre :</label>
						<div className="col-sm-7">
							<input type="text" ref="titleInput" className="form-control" required/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Année de sortie :</label>
						<div className="col-sm-7">
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Réalisateur : </label>
						<div className="col-sm-7">
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Acteurs :</label>
						<div className="col-sm-7">
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Synopsis :</label>
						<div className="col-sm-7">
							<textarea type="text" className="form-control" ></textarea>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-4 control-label">Note :</label>
						<div className="col-sm-7">
							<input type="number" className="form-control" ref="rateInput" placeholder="entre 1 et 5" min="0" max="5"/>
						</div>
					</div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              {saveButton}
            </div>
          </div>
			</form>
    );
  }
});

module.exports = MovieForm;
