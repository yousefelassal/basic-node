const http = require('http');

const hostname = '127.0.0.1'
const port = 3000

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
