function repeat(operation, num) {
  if (num <= 0) return;
  return trampoline(function() {
    repeat(operation, --num);
  });
}

function trampoline(fn) {
  result = fn.apply(fn, arguments);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
}

module.exports = function(operation, num) {
  return trampoline(operation);
};

// To be completely honest, I don't really understand what's going on here.
// Definitely need to figure this one out.
