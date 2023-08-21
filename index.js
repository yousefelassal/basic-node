const http = require('http');
const url = require('url');
const fs = require('fs/promises');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    
    if (path === '/') {
        fs.readFile('./index.html')
            .then((data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
            .catch((err) => {
                res.writeHead(500);
                res.end(err);
            });
    } else if (path === '/about') {
        fs.readFile('./about.html')
            .then((data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
            .catch((err) => {
                res.writeHead(500);
                res.end(err);
            });
    } else if (path === '/contact') {
        fs.readFile('./contact.html')
            .then((data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            })
            .catch((err) => {
                res.writeHead(500);
                res.end(err);
            });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});