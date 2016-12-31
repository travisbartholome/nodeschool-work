module.exports = function() {
  return Array.prototype.reduce.call(arguments, function(total, current) {
    return total + Object.prototype.hasOwnProperty.call(current, 'quack');
  }, 0);
};
