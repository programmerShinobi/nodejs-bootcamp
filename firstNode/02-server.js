// buat web server sendiri
const { info } = require('console');
const http = require('http');

// buat port server
const port = process.env.port || 3001;

// buat handling : request (req) & response (res) pada server
// http server handle request (res) from browser
// res => response
const server = http.createServer(function (req, res) { //CALLBACK FUNCTION
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        batch: "Batch#1",
        bootcamp: ["NodeJS", "codeXacademy"]
    }))
});

server.listen(port);

console.info(`Server  2 listening on port ${port}`);



