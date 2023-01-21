const http = require("http");
const host = 'localhost';
const port = 3333;

const produtos = require('./produtos.json')

function tratamentoProdutos(req, res){
    if(req.method === 'GET'){
        res.end(JSON.stringify(produtos))
    }else{
        res.end('sem suporte')
    }
}

const requestListener = function (req, res) {
    console.log('req.url', req.url)
    console.log('req.method', req.method)

    if(req.url === '/'){
        res.end('oi')
    } else if(req.url === '/produtos'){
        tratamentoProdutos(req, res)
    } else{
        res.end('desconhecido')
    }
};
const server = http.createServer(requestListener);
server.listen(port, host);