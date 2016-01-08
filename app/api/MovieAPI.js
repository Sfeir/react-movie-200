var axios = require('axios');

function getMovieList () {
  return axios.get('/server/api/movies')
            .then(function (response) { return response.data; });
}

function removeMovie (id) {
  return axios.delete('/server/api/movies/' + id);
}

module.exports = {
  getMovieList: getMovieList,
  removeMovie: removeMovie
};
