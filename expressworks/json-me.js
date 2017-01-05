const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', function(request, response) {
  fs.readFile(process.argv[3], 'utf8', function(err, data) {
    if (err) throw err;
    response.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);

// Given solution handles server-side errors using 500 status.
// Check it out.
