"use strict";

var express = require('express'),
    bodyParser  = require('body-parser'),
    api = require('./routes/api'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/server/img', express.static(__dirname + '/img'));

app.get('/server/api/movies', api.fetchMovies);
app.get('/server/api/movies/:id', api.fetchMovie);
app.get('/server/api/movies/:id/actors', api.fetchActorsOfMovie);
app.post('/server/api/movies', api.addMovie);
app.put('/server/api/movies/:id', api.updateMovie);
app.delete('/server/api/movies/:id', api.deleteMovie);

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});
