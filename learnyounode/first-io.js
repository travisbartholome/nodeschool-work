const fs = require("fs");

const fileString = fs.readFileSync(process.argv[2]).toString();

console.log(fileString.split("\n").length - 1);
