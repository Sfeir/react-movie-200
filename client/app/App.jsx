/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import Header           from './Header';
import SearchBar        from './SearchBar';
import MovieList        from './MovieList';
import * as MovieApi    from './api/MovieApi';

export default class App extends React.Component {

    state = {
        movies  : [],
        loadingMovies : false
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

    render() {
        return (
            <div>
                <Header/>
                <SearchBar/>
                <MovieList
                    movies={this.state.movies}
                    loadingMovies={this.state.loadingMovies}
                    onMovieDeletion={this.onMovieDeletion.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
