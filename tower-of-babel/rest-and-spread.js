let rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => val.split(",").forEach(
  x => x !== "" ? args.push(+x) : 0
));

function avg(...ar) {
  return ar.reduce((sum, cur) => sum + cur) / ar.length;
}

console.log(avg(...args));
