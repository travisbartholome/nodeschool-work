const duplexer2 = require('duplexer2');
const through2 = require('through2');

var countryCounts = {};

module.exports = function(counter) {
  return duplexer2(counter);
};
