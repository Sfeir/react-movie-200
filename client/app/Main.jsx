/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Home from './components/Home';
import Videotheque from './components/Videotheque';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const Main = (
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Videotheque>
                    <Switch>
                        <Route path="/movies"/>
                        <Route path="/movie/new" component={MovieForm} />
                        <Route path="/movie/:id" component={Movie} />
                    </Switch>
                </Videotheque>
                <Route component={Home}/>
            </Switch>
        </App>
    </Router>
);


ReactDOM.render(Main, document.getElementById('main'));
