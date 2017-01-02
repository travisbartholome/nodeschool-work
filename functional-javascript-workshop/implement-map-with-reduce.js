module.exports = function(arr, fn) {
  return arr.reduce(function(total, current) {
    return total.concat([fn(current)]);
  }, []);
};

// Check the provided solution for an implementation using call.
// Allows user to set a thisArg for the (exported) map function.
