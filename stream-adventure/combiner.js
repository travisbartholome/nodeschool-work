const combine = require('stream-combiner');
const split = require('split');
const through2 = require('through2');
const zlib = require('zlib');

module.exports = function() {
  let genreHolder;
  return combine(
    split(JSON.parse, null, { trailing: false }),
    through2.obj(function(obj, enc, next) {
      if (obj.type === 'genre') {
        if (genreHolder) {
          this.push(JSON.stringify(genreHolder) + '\n');
        }
        genreHolder = {
          name: obj.name,
          books: []
        };
      } else {
        genreHolder.books.push(obj.name);
      }
      next();
    }, function(done) {
      this.push(JSON.stringify(genreHolder));
      done();
    }),
    zlib.createGzip()
  );
};

// Hey, this one went fairly easily! Contrast to the previous.
// Given solution doesn't use object mode, mine does.
// Otherwise, they're similar.
