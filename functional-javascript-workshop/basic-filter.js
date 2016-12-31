module.exports = function(messages) {
  return messages
  .map(obj => obj.message)
  .filter(msg => msg.length < 50);
}
