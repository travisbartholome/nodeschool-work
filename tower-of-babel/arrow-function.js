let inputs = process.argv.slice(2);
console.log(inputs.map(x => x[0]).reduce((sum, cur) => sum + cur));
