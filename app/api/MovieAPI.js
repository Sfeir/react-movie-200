var axios = require('axios');

function getMovieList (cb) {
  return axios.get('/server/api/movies')
            .then(function (response) { return response.data; });
}

module.exports = {
  getMovieList: getMovieList
};
