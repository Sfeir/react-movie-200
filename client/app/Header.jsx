import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <header className="navbar navbar-default">
                <section className="container-fluid">
                    <a className="navbar-brand">ReactMovie</a>
                    <ul className="nav navbar-nav">
                        <li><a>Mes films</a></li>
                    </ul>
                </section>
            </header>
        );
    }
}