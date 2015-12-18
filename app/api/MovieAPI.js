var request = require('superagent');

function getMovieList (cb) {
  request
  .get('/server/api/movies')
  .end(function (err, res) {
    var movies = JSON.parse(res.text);

    cb(movies);
  });
}

module.exports = {
  getMovieList: getMovieList
};
