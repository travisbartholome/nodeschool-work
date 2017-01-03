const zlib = require('zlib');
const crypto = require('crypto');
const tar = require('tar');
const through2 = require('through2');

process.stdin
.pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
.pipe(zlib.createGunzip())
.pipe(tar.Parse().on('entry', function(entry) {
  let filename = entry.path;
  let filetype = entry.type;
  entry.pipe(crypto.createHash('md5', { encoding: 'hex' }))
  .pipe(through2(function(chunk, enc, next) {
    if (filetype === 'File') {
      this.push(chunk);
      this.push(' ' + filename + '\n');
    }
    next();
  }, function(done) {
    done();
  }))
  .pipe(process.stdout);
}));
