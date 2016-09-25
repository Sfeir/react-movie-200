import React    from 'react';
import ReactDOM from 'react-dom';

import Header           from './Header';
import SearchBar        from './SearchBar';
import Videotheque      from './Videotheque';
import * as MovieApi    from './api/MovieApi';
import MovieForm        from './MovieForm';
import Home             from './Home';

export default class App extends React.Component {

    state = {
        movies  : [],
        loadingMovies : false,
        searchKey : ''
    };

    componentWillMount() {
        this.setState({
            loadingMovies : true
        });
        MovieApi.getMovieList().then(movies => {
            this.setState({
                movies,
                loadingMovies : false
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

    addMovie(movie) {
        const newMovie = {
            title   : movie.title,
            actors  : movie.actors,
            synopsis: movie.synopsis
        };

        MovieApi.addMovie(newMovie).then(movie => {
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
            const newMovieList = this.state.movies.map(movie => movie.id === newData.id ? newData : movie);
            this.setState({
                movies : newMovieList
            });
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <SearchBar onSearch={this.onSearch.bind(this)}/>
                <MovieForm onMovieFormSaved={this.addMovie.bind(this)}/>
                <Videotheque
                    searchKey={this.state.searchKey}
                    movies={this.state.movies}
                    loadingMovies={this.state.loadingMovies}
                    onMovieDeletion={this.onMovieDeletion.bind(this)}
                    onMovieModification={this.onMovieModification.bind(this)}
                />
            </div>
        );
    }
}
