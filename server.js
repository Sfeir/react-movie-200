"use strict";

var express = require('express'),
    app = express();

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('Server running at http://%s:%s', host, port);
});
