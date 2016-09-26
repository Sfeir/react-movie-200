/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './Home';
import Videotheque from './Videotheque';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


const Main = (
    <Router>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/movies" component={Videotheque}/>
                <Route component={Home}/>
            </Switch>
        </App>
    </Router>
);


ReactDOM.render(Main, document.getElementById('main'));
