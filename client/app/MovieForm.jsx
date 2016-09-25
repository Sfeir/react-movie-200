import React from 'react';

export default class MovieForm extends React.Component {

    static defaultProps = {
        movie : {
            title   : '',
            actors  : '',
            synopsis: ''
        }
    };

    componentDidMount() {
        this.refs.movieTitle.value = this.props.movie.title;
        this.refs.movieActors.value = this.props.movie.actors;
        this.refs.movieSynopsis.value = this.props.movie.synopsis;
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onMovieFormSaved({
            title   : this.refs.movieTitle.value,
            actors  : this.refs.movieActors.value,
            synopsis: this.refs.movieSynopsis.value
        });

        this.resetForm();
    }

    resetForm() {
        this.refs.movieTitle.value = '';
        this.refs.movieActors.value = '';
        this.refs.movieSynopsis.value = '';
    }

    renderSaveButton() {
        if(!this.props.movie && this.props.movie.id) {
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
        const cancelBtn = this.props.edition ? <button className="btn btn-danger pull-right" onClick={this.props.onCancel}>Cancel</button> : false;
        const saveButton = this.renderSaveButton();
        return (
            <form className="form-horizontal">
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