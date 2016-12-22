const fs = require('fs');

const extension = "." + process.argv[3];


function filterList(err, list) {
  if (err) {
    console.error(err)
  } else {

    let extLen = extension.length;

    for (let i = 0; i < list.length; i++) {
      let extIndex = list[i].indexOf(extension);
      
      // Log the filename iff the extension is located at the end.
      if (extIndex === list[i].length - extLen && extIndex !== -1) {
        console.log(list[i]);
      }
    }

  }
}


fs.readdir(process.argv[2], filterList);
