const max = +process.argv[2];
const fizzBuzz = function*() {
  let num = 1;
  while (num <= max) {
    let res = num % 15 === 0 ? "FizzBuzz"
      : num % 3 === 0 ? "Fizz"
      : num % 5 === 0 ? "Buzz"
      : num;

    num++;
    yield res;
  }
}();

for (let i of fizzBuzz) {
  console.log(i);
}
