const trumpet = require('trumpet');
const through2 = require('through2');

var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();
stream.pipe(through2(function(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(stream);
