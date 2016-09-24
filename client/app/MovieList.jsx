import React from 'react';

import Movie from './Movie';


export default class MovieList extends React.Component {

    renderMovie(movie) {
        return (
            <Movie key={movie.id} data={movie} onMovieDeletion={this.props.onMovieDeletion} />
        );
    }

    render() {
        const searchKey = this.props.searchKey;
        const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().match(searchKey.toLowerCase()));
        const content = this.props.loadingMovies ? <li>Chargement des films</li> : filteredMovies.map(this.renderMovie.bind(this));
        return (
            <ul className="thumbnails list-unstyled">
                {content}
            </ul>
        );
    }
}