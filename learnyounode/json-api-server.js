const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {
  let responseURL = url.parse(request.url, true);
  if (!responseURL || !responseURL.query || !responseURL.query.iso) {
    response.writeHead(404);
    return response.end('{ "error": "Please end your query with ?iso=<someTime>" }');
  }

  let dateTime = new Date(responseURL.query.iso);

  if (responseURL.pathname === '/api/parsetime') {
    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(JSON.stringify({
      "hour": dateTime.getHours(),
      "minute": dateTime.getMinutes(),
      "second": dateTime.getSeconds()
    }));
  }

  if (responseURL.pathname === '/api/unixtime') {
    response.writeHead(200, { "Content-Type": "application/json" });
    return response.end(JSON.stringify({
      "unixtime": dateTime.getTime()
    }));
  }

  response.writeHead(404);
  return response.end('{ "error": "Please request a valid API endpoint" }');
});

// Not quite sure if sending a 404 header + API error is normal.
// Again, check out the given solution.

server.listen(Number(process.argv[2]));
