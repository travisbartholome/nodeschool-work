'use strict';
var a = 5; // This variable `a` should be accessible outside of the block scope.
const b = process.argv[2]; // This variable `b` should not be reassignable.

if (a === 5) {
  let c = 4;  // This variable `c` should only be valid in this block.
  console.log(c);  // 4

  const b = 8;  // This variable `b` should only be valid in this block and should not be reassignable.
  console.log(b); // 8
}

console.log(a); // 5
console.log(b);
try {
  c = 1000;  // Trying to change the value of `c`
} catch (e) {
  console.log(e);  // but an `c is not defined` error should occur.
}
