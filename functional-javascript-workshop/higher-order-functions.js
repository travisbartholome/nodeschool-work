function higherOrder(operation, num) {
  operation();
  if (num === 1) return;
  else higherOrder(operation, num - 1);
}

module.exports = higherOrder;
