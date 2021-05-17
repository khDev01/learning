// https://nodejs.dev/learn
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File not found')
    } else {
      res.write(data)
    }
    res.end()
  })
  // send text
  // res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
