const http = require('http');

// Using an IIFE to avoid unnecessary global variables.
// Probably not really important here, but still works well.
// Also, it's modular this way, which is cool.
(function(numArgs) {
  let requestEnds = 0;
  let neededRequests = numArgs - 2;
  let responses = [];

  // This pattern should probably be ingrained into my memory.
  function sendRequest(argNumber) {
    http.get(process.argv[argNumber], function(response) {
      let accumulator = '';
      response.setEncoding('utf8');
      response.on('data', function(data) {
        accumulator += data;
      });
      response.on('error', console.error);
      response.on('end', function(args) {
        responses[argNumber - 2] = accumulator;
        requestEnds++;

        // Prints results if all requests have ended.
        if (requestEnds === neededRequests) {
          for (let i = 0; i < responses.length; i++) {
            console.log(responses[i]);
          }
        }
      });
    });
  }

  // Actually sending the requests.
  for (let i = 2; i < numArgs; i++) {
    sendRequest(i);
  }

})(process.argv.length);

// I made this more flexible by varying the number of needed requests.
// This way, you can pass any number of URLs to the function.
// Maybe pass entire process.argv array to the IIFE?
