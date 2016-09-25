import React from 'react';
import _     from 'lodash';

import MovieForm from './MovieForm';

export default class Movie extends React.Component {

    state = {
        selected : false,
        editing  : false
    };

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
        const updatedMovie = Object.assign({}, this.props.data, newData);

        this.props.onMovieModification(updatedMovie);

        this.closeEditionForm();
    }

    renderActionButtons(data) {
        return (
            <div className="pull-right">
                <button className="btn btn-default" onClick={this.openEditionForm.bind(this)}>
                    <i className="glyphicon glyphicon-pencil" />
                </button>
                <button className="btn btn-danger" onClick={() => this.props.onMovieDeletion(data.id)}>
                    <i className="glyphicon glyphicon-trash"/>
                </button>
            </div>
        );
    }

    renderForm() {
        return (
            <MovieForm edition={true}
                movie={this.props.data}
                onCancel={this.onCancelModification.bind(this)}
                onMovieFormSaved={this.onMovieModification.bind(this)}
            />
        );
    }

    renderContent() {
        const data = this.props.data,
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
            <li className="col-md-12" onClick={this.onSelect.bind(this)}>
                {this.state.editing ? this.renderForm() : this.renderContent()}
            </li>
        );
    }
}