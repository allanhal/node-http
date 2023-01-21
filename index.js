const http = require("http");
const host = 'localhost';
const port = 3333;

const requestListener = function (req, res) {
    // if (req.url == "/allan") {
    //     res.end("<h1>Allan</h1>")
    // } else if (req.url == "/") {
    //     res.end("<h1>Estou vivo</h1>")
    // } else if (req.url.indexOf('/v1/') === 0) {
    //     res.end(req.url.substring(4))
    // } else {
    //     res.end("<h1>Desconhecido</h1>")
    // }    
    res.end(req.method)
};
const server = http.createServer(requestListener);
server.listen(port, host);