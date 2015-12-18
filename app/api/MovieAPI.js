var request = require('superagent');

function getMovieList (cb) {
  request
  .get('/server/api/movies')
  .end(function (err, res) {
    var movies = JSON.parse(res.text);

    cb(movies);
  });
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
