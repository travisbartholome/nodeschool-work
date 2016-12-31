const spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function(cmd, args) {
  let child = spawn(cmd, args);
  return duplexer2(child.stdin, child.stdout);
};

// How would this be done without the duplexer2 module?
