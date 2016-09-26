export function getMovieList() {
    return fetch('/server/api/movies')
            .then(response => response.json());
}

export function removeMovie(id) {
    return fetch(`/server/api/movies/${id}`, { method: 'DELETE' });
}

const headers = {
    'Accept'        : 'application/json',
    'Content-Type'  : 'application/json'
};

export function addMovie (movie) {
    return fetch('/server/api/movies/', { method: 'POST', headers, body : JSON.stringify(movie) })
        .then(response => response.json());
}

export function updateMovie (movie) {
    return fetch(`/server/api/movies/${movie.id}`, { method: 'PUT', headers, body : JSON.stringify(movie) })
        .then(response => response.json());
}

export function getMovie(id) {
    return fetch(`/server/api/movies/${id}`)
        .then(response => response.json());
}