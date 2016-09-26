import React from 'react';
import PropTypes from 'prop-types';

import MovieForm from './MovieForm';
import * as MovieApi from '../api/MovieApi';

export default class Movie extends React.Component {

    static contextTypes = {
        onMovieDeletion : PropTypes.func,
        onMovieModification : PropTypes.func
    };

    state = {
        selected : false,
        editing  : false,
        data: {}
    };

    componentDidMount() {
        this.fetchMovie();
    }

    componentDidUpdate(prevProps) {
        const oldId = prevProps.match.params.id;
        const newId = this.props.match.params.id;

        if( newId && oldId !== newId ) {
            this.fetchMovie();
        }
    }

    fetchMovie() {
        MovieApi.getMovie(this.props.match.params.id)
                .then( movie => this.setState( { data : movie } ) );
    }

    onSelect() {
        this.setState({
            selected : true
        });
    }

    openEditionForm() {
        this.setState({
            editing : true
        });
    }

    closeEditionForm() {
        this.setState({
            editing : false
        });
    }

    onCancelModification(event) {
        event.preventDefault();
        this.closeEditionForm();
    }

    onMovieModification(newData) {
        const updatedMovie = Object.assign({}, this.state.data, newData);

        this.context.onMovieModification(updatedMovie);

        this.closeEditionForm();
    }

    renderActionButtons(data) {
        return (
            <div className="pull-right">
                <button className="btn btn-default" onClick={this.openEditionForm.bind(this)}>
                    <i className="glyphicon glyphicon-pencil" />
                </button>
                <button className="btn btn-danger" onClick={() => this.context.onMovieDeletion(data.id)}>
                    <i className="glyphicon glyphicon-trash"/>
                </button>
            </div>
        );
    }

    renderForm() {
        return (
            <MovieForm edition={true}
                movie={this.state.data}
                onCancel={this.onCancelModification.bind(this)}
                onMovieFormSaved={this.onMovieModification.bind(this)}
            />
        );
    }

    renderContent() {
        const data = this.state.data,
              afficheUrl = data.poster || 'server/img/no-poster.jpg';
        const actionButtons = this.state.selected ? this.renderActionButtons(data) : null;
        return (
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

    render() {
        return (
            <div className="col-md-12" onClick={this.onSelect.bind(this)}>
                {this.state.editing ? this.renderForm() : this.renderContent()}
            </div>
        );
    }
}