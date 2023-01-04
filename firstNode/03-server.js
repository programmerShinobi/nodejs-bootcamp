// create basic routing -----------------------------------------------------------

const { info } = require('console');
const http = require('http');

const port = process.env.port || 3001;

const server = http.createServer(function (req, res) { //CALLBACK FUNCTION
    if (req.url === '/') return responseText(req, res);
    if (req.url === '/json') return responseJson(req, res);

    responseNotFound(req, res);
});

function responseText(req, res) { // REGULAR FUNCTION
    res.setHeader("Content-Type", "application/json");
    res.end("Hi Bootcamp");
}

function responseJson(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        batch: "Batch#1",
        bootcamp: ["NodeJS", "codeXacademy"]
    }))
}

function responseNotFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
}

server.listen(port);

console.info(`Server 3 listening on port ${port}`);



