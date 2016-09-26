import React from 'react';
import PropTypes from 'prop-types';

import * as MoviesActionCreator from '../actions/MoviesActionCreator';

export default class MovieForm extends React.Component {

    static defaultProps = {
        movie : {
            title   : '',
            actors  : '',
            synopsis: ''
        }
    };

    componentDidMount() {
        this.refs.movieTitle.value = this.props.movie.title || '';
        this.refs.movieActors.value = this.props.movie.actors || '';
        this.refs.movieSynopsis.value = this.props.movie.synopsis || '';
        this.refs.movieReleaseYear.value = this.props.movie.releaseYear || '';
        this.refs.movieRate.value = this.props.movie.rate || '';
        this.refs.movieDirector.value = this.props.movie.directors || '';
    }

    onSubmit(e) {
        e.preventDefault();

        MoviesActionCreator.addMovie({
            title   : this.refs.movieTitle.value,
            actors  : this.refs.movieActors.value,
            synopsis: this.refs.movieSynopsis.value,
            releaseYear: this.refs.movieReleaseYear.value,
            rate: this.refs.movieRate.value,
            directors: this.refs.movieDirector.value
        });

        this.resetForm();
    }

    resetForm() {
        this.refs.movieTitle.value = '';
        this.refs.movieReleaseYear.value = '';
        this.refs.movieDirector.value = '';
        this.refs.movieActors.value = '';
        this.refs.movieSynopsis.value = '';
        this.refs.movieRate.value = '';
        this.refs.movieDirector.value = '';
    }

    renderSaveButton() {
        if(this.props.edition) {
            return (
                <button type="submit" className="btn btn-primary">Modifier</button>
            );
        } else {
            return (
                <button type="submit" className="btn btn-primary">Ajouter</button>
            );
        }
    }

    render() {
        const saveButton = this.renderSaveButton();
        return (
            <form className="form-horizontal" onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Titre :</label>
                    <div className="col-sm-7">
                        <input type="text" ref="movieTitle" className="form-control" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Année de sortie :</label>
                    <div className="col-sm-7">
                        <input type="text" ref="movieReleaseYear" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Réalisateur : </label>
                    <div className="col-sm-7">
                        <input type="text" ref="movieDirector" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Acteurs :</label>
                    <div className="col-sm-7">
                        <input type="text" ref="movieActors" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Synopsis :</label>
                    <div className="col-sm-7">
                        <textarea type="text" ref="movieSynopsis" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-4 control-label">Note :</label>
                    <div className="col-sm-7">
                        <input type="number" className="form-control" ref="movieRate" placeholder="entre 1 et 5" min="0" max="5"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-8">
                        {saveButton}
                    </div>
                </div>
            </form>
        );
    }
}