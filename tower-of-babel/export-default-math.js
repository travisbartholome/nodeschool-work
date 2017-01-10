function _sqrt(s, x, last) {
  return x != last ? _sqrt(s, (x + s/x) / 2.0, x) : x;
}

export default {
  PI: 3.141592,
  sqrt: function(s, x, last) {
    return _sqrt(s, s/2.0, 0.0);
  },
  square: function(x) {
    return x * x;
  }
};
