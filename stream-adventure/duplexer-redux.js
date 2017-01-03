const duplexer2 = require('duplexer2');
const through2 = require('through2');

var counts = {};

module.exports = function(counter) {
  return duplexer2({ objectMode: true }, through2({ objectMode: true },
    function(obj, enc, next) {
      counts[obj.country] = counts[obj.country] + 1 || 1;
      next();
    }, function(done) {
      counter.setCounts(counts);
      done();
    }), counter);
};

// Took quite a while to get this one.
// `objectMode` is definitely useful, but I only found it by chance while looking at the through2 docs.
// Possibly explain objectMode in the instructions for this lesson?
