const fs = require('fs');

// Passes a filtered array from readdir to the provided callback.
module.exports = function(dirName, fileExtension, callback) {

  var filteredList = [];

  fs.readdir(dirName, function(err, list) {
    if (!err) {
      let extFinal = "." + fileExtension;
      let extLen = extFinal.length;

      filteredList = list.filter(function(name) {
        return name.indexOf(extFinal) === name.length - extLen
            && name.indexOf(extFinal) !== -1;
      });
    }

    // Once the list is filtered, run the callback function to print the files.
    // Still runs the callback in the case of an error.
    callback(err, filteredList);
  });

}
