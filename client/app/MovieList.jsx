import React from 'react';

import Movie from './Movie';

const MOVIES = [
    {
        id: 1,
        title : "Avatar",
        category : 'sciencesfiction',
        releaseYear : "2010",
        poster : "server/img/avatar.jpg",
        directors : "James Cameron",
        actors : "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
        synopsis : "Sur la lointaine planète de Pandora, Jake Sully, un héros malgré lui, " +
        "se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " +
        "combat héroïque pour sauver toute une civilisation.",
        rate : 3,
        lastViewDate : new Date(2013, 3, 1, 12, 4, 50),
        price : 25.46
    },
    {
        id: 2,
        title : "Seigneur des Anneaux : La Communauté de l'Anneau",
        category : 'sciencesfiction',
        releaseYear : "2001",
        poster : "server/img/seigneurdesanneaux1.jpg",
        directors : "Peter Jackson",
        actors : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis : "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absolu" +
        "qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu." +
        " Commence alors un vaste périple visant à la destruction de l'objet.",
        rate : 5,
        lastViewDate : new Date(2012, 5, 13, 9, 30, 45),
        price : 34.76
    }
];


export default class MovieList extends React.Component {

    state = {
        movies : []
    };

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                movies : MOVIES
            });
        }, 1000);
    }

    render() {
        const movies = this.state.movies.map(movie => <Movie data={movie} />);
        return (
            <ul className="thumbnails list-unstyled">
                {movies}
            </ul>
        );
    }
}