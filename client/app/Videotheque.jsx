import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar        from './SearchBar';
import MovieForm        from './MovieForm';
import * as MovieApi    from './api/MovieApi';

export default class Videotheque extends React.Component {

    state = {
        movies : [],
        loadingMovies : false,
        searchKey : ''
    };

    componentWillMount() {
        this.setState({
            loadingMovies: true
        });
        MovieApi.getMovieList().then(movies => this.setState({
            movies,
            loadingMovies: false
        }));
    }

    onMovieDeletion(movieId) {
        MovieApi.removeMovie(movieId).then(() => {
            const filteredMovieList = this.state.movies.filter(movie => movie.id !== movieId)
            this.setState({
                movies : filteredMovieList
            });
        });
    }

    addMovie(movie) {
        MovieApi.addMovie(movie).then(movie => {
            const newMovieList = this.state.movies.concat([movie]);

            this.setState({
                movies : newMovieList
            });
        });
    }

    onSearch(searchKey) {
        this.setState({ searchKey });
    }

    onMovieModification(newData) {
        MovieApi.updateMovie(newData).then(() => {
            const newMovieList = this.state.movies.map( movie => movie.id === newData.id ? newData : movie );

            this.setState({
                movies : newMovieList
            });
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
        const { searchKey, loadingMovies, movies } = this.state;

        const filteredMovies = movies.filter( movie => movie.title.toLowerCase().match( searchKey.toLowerCase() ) );

        const content = loadingMovies ? this.renderLoading() : filteredMovies.map( this.renderMovieListItem.bind( this ) );

        return (
            <div>
                <MovieForm onMovieFormSaved={this.addMovie.bind(this)}/>
                <header className="page-header">
                    <h1>
                        Ma vidéothèque <small>{movies.length} films</small> <Link className="btn btn-success" to="/movie/new">Ajouter</Link>
                    </h1>
                </header>
                <SearchBar onSearch={this.onSearch.bind(this)}/>
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