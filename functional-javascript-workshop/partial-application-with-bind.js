module.exports = function(namespace) {
  return (function() {
    console.log.apply(null, arguments);
  }).bind(null, namespace);
};

// Given solution is far cleaner.
// Exported function returns `console.log.bind(console, namespace)`
