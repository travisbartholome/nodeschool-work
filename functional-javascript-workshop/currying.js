module.exports = function curryN(fn, n) {
  if (!n && n !== 0) n = fn.length;
  if (n === 0) {
    // All arguments have been bound, so we just need to execute.
    return fn();
  } else {
    // Bind one argument at a time until all of them are bound.
    return function(arg) {
      return curryN(fn.bind(fn, arg), n-1);
    };
  }
}

// Got stuck for a long time on this because I was using --n instead of n-1...
// Not completely sure why that made such a difference.
