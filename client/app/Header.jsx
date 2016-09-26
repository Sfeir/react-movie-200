import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-default">
                <section className="container-fluid">
                    <Link className="navbar-brand" to="/home">ReactMovie</Link>
                    <ul className="nav navbar-nav">
                        <li><a>Mes films</a></li>
                    </ul>
                </section>
            </header>
        );
    }
}