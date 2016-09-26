import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar        from './SearchBar';
import * as MovieApi    from '../api/MovieApi';
import MoviesStore      from '../stores/MoviesStore';
import * as MoviesActionCreator from '../actions/MoviesActionCreator';


export default class Videotheque extends React.Component {

    static contextTypes = {
        router : PropTypes.object
    };

    static childContextTypes = {
        onMovieDeletion : PropTypes.func,
        onMovieFormSaved : PropTypes.func,
        onMovieModification : PropTypes.func
    };

    state = {
        movies : [],
        loadingMovies : false
    };

    getChildContext() {
        return {
            onMovieDeletion : this.onMovieDeletion.bind(this),
            onMovieFormSaved : this.addMovie.bind(this),
            onMovieModification : this.onMovieModification.bind(this)
        };
    }

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

    onMovieDeletion(movieId) {
        MovieApi.removeMovie(movieId).then(() => {
            const filteredMovieList = this.state.movies.filter(movie => movie.id !== movieId);
            this.setState({
                movies : filteredMovieList
            });

            this.context.router.history.push('/movies');
        });
    }

    addMovie(movie) {
        MovieApi.addMovie(movie).then(movie => {
            const newMovieList = this.state.movies.concat([movie]);

            this.setState({
                movies : newMovieList
            });

            this.context.router.history.push('/movies');
        });
    }

    onMovieModification(newData) {
        MovieApi.updateMovie(newData).then(() => {
            const newMovieList = this.state.movies.map( movie => movie.id === newData.id ? newData : movie );

            this.setState({
                movies : newMovieList
            });

            this.context.router.history.push('/movies');
        });
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