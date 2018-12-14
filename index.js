var server = require('./server');
var port = (process.env.PORT || 4200);

console.log("Starting API server...");

server.app.listen(port);

console.log("Server ready!");