const http = require('http');
const through2 = require('through2');

const server = http.createServer(function(request, response) {
  if (request.method === 'POST') {
    request.pipe(through2(function(buf, enc, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })).pipe(response);
  }
});

server.listen(Number(process.argv[2]));
