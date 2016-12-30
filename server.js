var express = require('express');
var bodyParser = require("body-parser");
var engines = require('consolidate');
var app = express();
var port = process.env.port || 1337

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render("index");
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
