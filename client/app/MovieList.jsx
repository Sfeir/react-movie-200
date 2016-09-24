import React from 'react';

import Movie from './Movie';
import * as MovieApi from './api/MovieApi';


export default class MovieList extends React.Component {

    state = {
        movies  : [],
        loading : false
    };

    componentWillMount() {
        this.setState({
            loading : true
        });
        MovieApi.getMovieList().then(movies => {
            this.setState({
                movies,
                loading : false
            });
        });
    }

    onMovieDeletion(movieId) {
        MovieApi.removeMovie(movieId).then(() => {
            const filteredMovieList = this.state.movies.filter(movie => movie.id !== movieId);
            this.setState({
                movies : filteredMovieList
            });
        });
    }

    renderMovie(movie) {
        return (
            <Movie data={movie} onMovieDeletion={this.onMovieDeletion.bind(this)} />
        );
    }

    render() {
        const content = this.state.loading ? <li>Chargement des films</li> : this.state.movies.map(this.renderMovie.bind(this));
        return (
            <ul className="thumbnails list-unstyled">
                {content}
            </ul>
        );
    }
}