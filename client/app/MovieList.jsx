import React from 'react';

import Movie from './Movie';


export default class MovieList extends React.Component {

    renderMovie(movie) {
        return (
            <Movie key={movie.id} data={movie} onMovieDeletion={this.props.onMovieDeletion} />
        );
    }

    render() {
        const content = this.props.loadingMovies ? <li>Chargement des films</li> : this.props.movies.map(this.renderMovie.bind(this));
        return (
            <ul className="thumbnails list-unstyled">
                {content}
            </ul>
        );
    }
}