import React from 'react';

import Movie from './Movie';


export default class MovieList extends React.Component {

    shouldComponentUpdate(nextProps) {
        return this.props.searchKey !== nextProps.searchKey || this.props.movies !== nextProps.movies;
    }

    renderMovie(movie) {
        return (
            <Movie key={movie.id}
                   data={movie}
                   onMovieDeletion={this.props.onMovieDeletion}
                   onMovieModification={this.props.onMovieModification}
            />
        );
    }

    render() {
        const { searchKey, loadingMovies, movies } = this.props;

        const [firstMovie, ...filteredMovies] = movies.filter(movie => movie.title.toLowerCase().match(searchKey.toLowerCase()));

        const content = loadingMovies ? <li>Chargement des films en cours</li> : filteredMovies.map(this.renderMovie.bind(this));
        const firstMovieContent = movies.length > 0 ? this.renderMovie(firstMovie) : null;

        return (
            <div>
                <header className="page-header">
                    <h1>Ma vidéothèque <small>{movies.length} films</small> <a className="btn btn-success" to="/movies/new">Ajouter</a></h1>
                </header>
                <ul className="col-md-4 list-group">
                    {content}
                </ul>
                <div className="col-md-8">
                    {firstMovieContent}
                </div>
            </div>
        );
    }
}