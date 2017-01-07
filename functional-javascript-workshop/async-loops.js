function loadUsers(userIds, load, done) {
  let users = [];
  let loaded = 0;
  userIds.forEach(function(id, index) {
    load(id, function(data) {
      users[index] = data;
      loaded++;
      if (loaded === userIds.length) done(users);
    });
  });
}

module.exports = loadUsers;

// Still odd to me that the previous challenge was quite difficult,
// but this one seems really simple.
// Maybe I've just gotten used to callbacks, but not trampolining.
// Do I just need to work more on recursion, maybe?
