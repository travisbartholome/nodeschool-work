const http = require('http');
const fs = require('fs');

const FILE_PATH = process.argv[3];

const server = http.createServer(function(request, response) {
  let file = fs.createReadStream(FILE_PATH);
  file.pipe(response);
});

// Response is sent without headers.
// Check the given solution for info on using response.writeHead.

server.listen(Number(process.argv[2]));
