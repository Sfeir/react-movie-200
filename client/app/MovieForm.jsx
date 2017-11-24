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

    render() {
        const cancelBtn = this.props.edition ? <button className="btn btn-danger pull-right" onClick={this.props.onCancel}>Cancel</button> : false;
        return (
            <form className="movie-form" onSubmit={this.onSubmit.bind(this)}>
                <h3 className="col-md-12">Add a movie</h3>
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
}