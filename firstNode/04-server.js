const { info } = require('console');
// create basic routing -----------------------------------------------------------


const fs = require('fs');
const http = require('http');

const port = process.env.port || 3001;

const server = http.createServer(function (req, res) { //CALLBACK FUNCTION
    if (req.url === '/') return responseText(req, res);
    if (req.url === '/json') return responseJson(req, res);
    if (req.url.match(/^\/static/)) return responseStatic(req, res);

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

function responseStatic(req, res) {
    const fileName = `${__dirname}/public${req.url.split('/static')[1]}`;
    fs.createReadStream(fileName)
        .on("error", () => responseNotFound)
        .pipe(res);
}

server.listen(port);

console.info(`Server 4 listening on port ${port}`);



