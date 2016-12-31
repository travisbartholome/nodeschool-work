module.exports = function(inputWords) {
  return inputWords.reduce(function(counts, current, index, array) {
    if (counts[current]) {
      counts[current]++;
    } else {
      counts[current] = 1;
    }
    return counts;
  }, {});
}
