const http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  let accumulator = "";
  response.on('data', function(data) {
    accumulator += data;
  });
  response.on('error', console.error);
  response.on('end', function(args) {
    console.log(accumulator.length);
    console.log(accumulator);
  })
}).on('error', console.error);

// Admittedly, I'm not quite sure about the underlying mechanism for http.get
// Where are the docs for the various possible events?

// Again, look at the nodeschool solution. Uses an external module.
