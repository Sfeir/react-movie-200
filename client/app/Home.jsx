import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Movie</h1>
                <p>Une application de gestion de films développée avec ReactJS</p>
                <p><a className="btn btn-primary btn-lg" href="https://facebook.github.io/react/" target="_blank" role="button">En savoir plus sur ReactJS</a></p>
            </div>
        );
    }
}
