import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar        from './SearchBar';
import * as MovieApi    from '../api/MovieApi';
import MoviesStore      from '../stores/MoviesStore';
import * as MoviesActionCreator from '../actions/MoviesActionCreator';


export default class Videotheque extends React.Component {

    state = {
        movies : [],
        loadingMovies : false
    };

    updateMovies = (storeState) => {
        this.setState( { movies: storeState.displayedMovies } );
    };

    componentWillMount() {
        MoviesStore.addChangeListener(this.updateMovies);
        MoviesActionCreator.fetchMovies();
    }

    componentWillUnmount() {
        MoviesStore.removeChangeListener(this.updateMovies);
    }

    renderMovieListItem(movie) {
        return (
            <li className="list-group-item" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
        );
    }

    renderLoading() {
        return (
            <li>Chargement des films en cours</li>
        );
    }

    render() {
        const { loadingMovies, movies } = this.state;

        const content = loadingMovies ? this.renderLoading() : movies.map( this.renderMovieListItem.bind( this ) );

        return (
            <div>
                <header className="page-header">
                    <h1>
                        Ma vidéothèque <small>{movies.length} films</small> <Link className="btn btn-success" to="/movie/new">Ajouter</Link>
                    </h1>
                </header>
                <SearchBar/>
                <ul className="col-md-4 list-group">
                    {content}
                </ul>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        );
    }
}