module.exports = function(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(user) {
      return goodUsers.some(valid => valid.id === user.id);
    });
  };
}
