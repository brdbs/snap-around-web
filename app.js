// var http = require('http');

// var finalhandler = require('finalhandler');
// var serveStatic = require('serve-static');

// var serve = serveStatic("./");

// var server = http.createServer(function(req, res){
//   var done = finalhandler(req, res)
//   serve(req, res, done)
// });

// var port = process.env.PORT || 3000;
// app.listen(port, function() {
// 	console.log("Server running");
// }

function main(argv) {
  new HttpServer({
    'GET': createServlet(StaticServlet),
    'HEAD': createServlet(StaticServlet)
  }).start(process.env.PORT || Number(argv[2]) || DEFAULT_PORT);
}