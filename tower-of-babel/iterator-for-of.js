const max = +process.argv[2];
let fizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) return {done: true};
        // (Else)
        let res = {
          done: false,
          value: num % 3 === 0 && num % 5 === 0 ? "FizzBuzz"
            : num % 3 === 0 ? "Fizz"
            : num % 5 === 0 ? "Buzz"
            : num
        }
        num++;
        return res;
      }
    }
  }
};

for (let i of fizzBuzz) {
  console.log(i);
}
