let evenOrOdd = +process.argv[2];
let evenOrOddKey = +process.argv[2] % 2 === 0 ? "even" : "odd";
let sum = +process.argv[3] + evenOrOdd;
console.log({
  [evenOrOddKey]: evenOrOdd,
  [sum]: sum
});

// Ironic that this is far more readable than the given solution...
