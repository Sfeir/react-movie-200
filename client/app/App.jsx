/** Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Polyfills */
import 'babel-polyfill';
import 'whatwg-fetch';

import React    from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <header className="col-md-12">
                    <h2>ReactMovie</h2>
                </header>

                <ul className="thumbnails list-unstyled">
                    <li className="col-md-12 row">
                        <img src="server/img/avatar.jpg" className="col-md-2" />
                        <div className="caption">
                            <h3>AVATAR</h3>
                            <p><b>Acteurs : </b>Bruce Willis, Bruce Willis & Bruce Willis</p>
                            <p><b>Synopsis : </b>Il se passe des trucs dans ce film</p>
                        </div>
                    </li>

                    <li className="col-md-12 row">
                        <img src="server/img/rec.jpg" className="col-md-2" />
                        <div className="caption">
                            <h3>REC</h3>
                            <p><b>Acteurs : </b>Des gens, et d'autres gens.</p>
                            <p><b>Synopsis : </b>Il se passe aussi des trucs dans ce film</p>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));
