const fs = require('fs');

// Passes a filtered array from readdir to the provided callback.
module.exports = function(dirName, fileExtension, callback) {

  var filteredList = [];

  fs.readdir(dirName, function(err, list) {
    if (!err) {
      let extFinal = "." + fileExtension;
      let extLen = extFinal.length;

      for (let i = 0; i < list.length; i++) {
        let extIndex = list[i].indexOf(extFinal);

        // Add the filename to results iff the extension is located at the end.
        if (extIndex === list[i].length - extLen && extIndex !== -1) {
          filteredList.push(list[i]);
        }
      }
    }

    // Once the list is filtered, run the callback function to print the files.
    // Still runs the callback in the case of an error.
    callback(err, filteredList);
  });

}
