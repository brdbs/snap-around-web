// var http = require('http');

// var finalhandler = require('finalhandler');
// var serveStatic = require('serve-static');

// var serve = serveStatic("./");

// var server = http.createServer(function(req, res){
//   var done = finalhandler(req, res);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   serve(req, res, done);
// });


// var connect = require("connect");

// var server = connect().use(connect.static( '/'));

// 

var connect = require('connect');
var serveStatic = require('serve-static'); 
var app = connect(); 

app.use(serveStatic('./')); 
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Server running");
});