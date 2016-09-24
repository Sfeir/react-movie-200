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

    renderMovie(movie) {
        return (
            <Movie data={movie} />
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