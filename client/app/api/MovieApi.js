export function getMovieList() {
    return fetch('/server/api/movies')
            .then(response => response.json());
}
