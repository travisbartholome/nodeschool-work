function reduce(arr, fn, initial) {
  // Assuming initial is always supplied.
  let elem = fn(initial, arr[0], 0, arr);
  return arr.length === 1
    ? elem
    : reduce(arr.slice(1), fn, elem);
}

module.exports = reduce;
