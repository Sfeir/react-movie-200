var axios = require('axios');

function getMovieList (cb) {
  return axios.get('/server/api/movies')
            .then(function (response) { return response.data; });
}

function removeMovie (id, cb) {
  request
  .delete('/server/api/movies/' + id)
  .end(function (err, res) {
    if (err) {
      console.log("Ooooops, la suppression n'a pas marché");
    } else {
      cb();
    }
  });
}

module.exports = {
  getMovieList: getMovieList,
  removeMovie: removeMovie
};
