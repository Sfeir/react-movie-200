/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import Header       from './Header';
import SearchBar    from './SearchBar';
import MovieList    from './MovieList';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <SearchBar/>
                <MovieList/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
