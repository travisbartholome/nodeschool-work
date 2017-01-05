function Spy(target, method) {
  let output = { count: 0 };
  let oldFunc = target[method];
  target[method] = function() {
    output.count++;
    let args = Array.prototype.slice.call(arguments);
    return oldFunc.apply(target, args);
  }
  return output;
}

module.exports = Spy;

// Used the code below for testing/debugging.

/*
const obj = {
  test: function(a) {
    return 3*a;
  }
};

console.log('original:', obj.test(1));
var spy = Spy(obj, 'test');
for (let i = 0; i < 4; i++) {
  console.log(obj.test(1));
}
console.log('spy.count:', spy.count);
*/
