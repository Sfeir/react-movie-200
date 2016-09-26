/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { HashRouter as Router, Route } from 'react-router-dom';


const Main = (
    <Router>
        <Route path="/" component={App}/>
    </Router>
);


ReactDOM.render(Main, document.getElementById('main'));
