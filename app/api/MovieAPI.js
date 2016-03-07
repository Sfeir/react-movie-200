var axios = require('axios');

function getMovieList () {
  return axios.get('/server/api/movies')
          .then(function (response) { return response.data; });
}

module.exports = {
  getMovieList: getMovieList
}
