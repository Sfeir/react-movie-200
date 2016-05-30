var React = require('react');
var MovieForm = require('./MovieForm.jsx');
var _ = require('lodash');
var MovieAPI = require('../api/MovieAPI.js');

var MoviesStore = require('../stores/MoviesStore');
var MoviesActionCreator = require('../actions/MoviesActionCreator');

var history = require('../history');

var Movie = React.createClass({
	getInitialState: function () {
		return {selected: false, editing: false, data: {}}
	},

	componentWillMount: function () {
		MoviesStore.addChangeListener(this.updateMovie);
	},

	componentDidMount: function () {
		this.findMovie();
	},

	componentWillUnmount: function () {
		MoviesStore.removeChangeListener(this.updateMovie);
	},

	componentDidUpdate: function (prevProps) {
		let oldId = prevProps.params.id;
		let newId = this.props.params.id;

		if (newId && oldId !== newId) {
			this.findMovie();
		}
	},

	findMovie: function () {
		MoviesActionCreator.findMovie(this.props.params.id);
	},

	updateMovie: function () {
		var state = MoviesStore.getState();

		this.setState({data: state.movie});
	},

	onSelect: function () {
		this.setState({selected: true});
	},

	openEditionForm: function () {
		this.setState({editing: true});
	},

	closeEditionForm: function (event) {
		this.setState({editing: false});
	},

	onCancelModification: function (event) {
		event.preventDefault();
		this.closeEditionForm();
	},

	onMovieModification: function (newData) {
		var updatedMovie = _.merge(this.state.data, newData);

		this.props.onMovieModification(updatedMovie);

		this.closeEditionForm();
	},

	deleteMovie: function () {
		MoviesActionCreator.deleteMovie(this.props.params.id);
		history.replaceState(null, '/movies');
	},

	render: function () {
		var data = this.state.data,
			afficheUrl = data.poster || 'img/no-poster.jpg',
			actionButtons,
			content;

		if (this.state.selected) {
			actionButtons = (
				<div className="pull-right">
					<button className="btn btn-default" onClick={this.openEditionForm}><i className="glyphicon glyphicon-pencil"/></button>
					<button className="btn btn-danger" onClick={this.deleteMovie}><i className="glyphicon glyphicon-trash"/></button>
				</div>
			);
		} else {
			actionButtons = false;
		}

		if (this.state.editing) {
			content = <MovieForm edition={true} movie={this.state.data} onCancel={this.onCancelModification} onMovieFormSaved={this.onMovieModification}/>
		} else {
			content = (
				<div className="row">
					<img src={afficheUrl} className="col-md-3"/>
					<div className="caption col-md-9">
						<h3>{data.title} {actionButtons}
						</h3>
						<p>
							<b>Année de sortie :
							</b>{data.releaseYear}</p>
						<p>
							<b>Réalisateurs :
							</b>{data.directors}</p>
						<p>
							<b>Acteurs :
							</b>{data.actors}</p>
						<p>
							<b>Synopsis :
							</b>{data.synopsis}</p>
						<p>
							<b>Vu le :
							</b>{data.lastViewDate}</p>
						<p>
							<b>Prix :
							</b>{data.price}</p>
						<p>
							<b>Note :
							</b>{data.rate}</p>
					</div>
				</div>
			);
		}

		return (
			<div onClick={this.onSelect}>
				{content}
			</div>

		);
	}
});

module.exports = Movie;
