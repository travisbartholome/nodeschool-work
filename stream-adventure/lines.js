const split = require('split');
const through2 = require('through2');

var isOddLine = true;

process.stdin
.pipe(split())
.pipe(through2(function(buffer, encoding, next) {
  if (isOddLine) {
    this.push(buffer.toString().toLowerCase() + '\n');
  } else {
    this.push(buffer.toString().toUpperCase() + '\n');
  }
  isOddLine = !isOddLine;
  next();
}))
.pipe(process.stdout);
