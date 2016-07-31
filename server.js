var express = require('express');
var app = express();
var port = 3000;

var middleware = require("./middleware.js");
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.get('/aboutus',middleware.requireAuthentication, function(req, res) {
	res.send('hello Express This is about us!!!!');
});

app.use(express.static(__dirname +'/public'));

console.log(__dirname);
app.listen(port, function() {
	console.log('express server started :' + port);
});