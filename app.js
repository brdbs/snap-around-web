var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./");

var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server running");
}