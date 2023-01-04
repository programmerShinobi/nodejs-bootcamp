// buat web server sendiri
const { info } = require('console');
const http = require('http');

// buat port server
const port = process.env.port || 3001;

// buat handling : request (req) & response (res) pada server
// http server handle request (res) from browser
// res => response
const server = http.createServer(function (req, res) { //CALLBACK FUNCTION
    res.end("Hi bootcamp");
});

server.listen(port);

console.info(`Server listening on port ${port}`);



