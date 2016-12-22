const dirFilter = require('./modular-module.js');

function logFileList(err, fileArr) {
  if (err) {
    return console.error(err);
  }

  for (let i = 0; i < fileArr.length; i++) {
    console.log(fileArr[i]);
  }
}

dirFilter(process.argv[2], process.argv[3], logFileList);
