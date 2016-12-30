const concat = require('concat-stream');

process.stdin.pipe(concat(function(body) {
  let bodyString = body.toString();
  console.log(bodyString.split('').reverse().join(''));
}));
