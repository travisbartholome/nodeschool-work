const fs = require('fs');

function onRead(err, fileString) {
  if (!err) {
    console.log(fileString.split('\n').length - 1);
  }
}

fs.readFile(process.argv[2], 'utf8', onRead);
