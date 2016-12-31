const slice = Array.prototype.slice;

module.exports = function(namespace) {
  return function() {
    let array = slice.call(arguments, 0);
    array.unshift(namespace);
    console.log.apply(null, array);
  };
}
