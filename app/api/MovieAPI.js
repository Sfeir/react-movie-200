var axios = require('axios');

function getMovieList () {
  return axios.get('/server/api/movies')
            .then(function (response) { return response.data; });
}

function removeMovie (id) {
  return axios.delete('/server/api/movies/' + id);
}

function addMovie (movie) {
  return axios.post('/server/api/movies/', movie)
            .then(function (response) { return response.data; });
}

module.exports = {
  getMovieList: getMovieList,
  removeMovie: removeMovie,
  addMovie: addMovie
};
