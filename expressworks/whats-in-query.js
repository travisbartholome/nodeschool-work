const express = require('express');
const app = express();

app.get('/search', function(request, response) {
  response.send(request.query);
});

app.listen(process.argv[2]);
