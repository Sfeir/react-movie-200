import React from 'react';

export default class Movie extends React.Component {

    state = {
        selected : false
    };

    onSelect() {
        this.setState({
            selected : true
        });
    }

    renderActionButtons(data) {
        return (
            <div className="pull-right">
                <button className="btn btn-default">
                    <i className="glyphicon glyphicon-pencil" />
                </button>
                <button className="btn btn-danger" onClick={() => this.props.onMovieDeletion(data.id)}>
                    <i className="glyphicon glyphicon-trash"/>
                </button>
            </div>
        );
    }

    render() {
        const data = this.props.data,
              afficheUrl = data.poster || 'server/img/no-poster.jpg';

        const actionButtons = this.state.selected ? this.renderActionButtons(data) : null;

        return (
            <li className="col-md-12" onClick={this.onSelect.bind(this)}>
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
            </li>
        );
    }
}