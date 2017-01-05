const express = require('express');

const app = express();
app.get('/home', function(request, response) {
  response.end('Hello World!');
});
app.listen(process.argv[2]);
