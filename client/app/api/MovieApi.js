export function getMovieList() {
    return fetch('/server/api/movies')
            .then(response => response.json());
}

export function removeMovie(id) {
    return fetch(`/server/api/movies/${id}`, { method: 'DELETE' });
}
