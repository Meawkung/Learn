const http = require('http');

const hostname = '127.0.0.1';
    const port = 3001;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello Web Programming Technology</h1>');
    res.end('Hello, World\n');
});

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});