
var connect = require('connect');
var serveStatic = require('serve-static'); 
var app = connect(); 

app.use(serveStatic('./')); 
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Server running");
});