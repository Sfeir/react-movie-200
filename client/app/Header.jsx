import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-default">
                <section className="container-fluid">
                    <Link className="navbar-brand" to="/home">ReactMovie</Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/movies">Mes films</Link></li>
                    </ul>
                </section>
            </header>
        );
    }
}