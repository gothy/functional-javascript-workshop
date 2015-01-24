function loadUsers(userIds, load, done) {
  var users = [];
  var loaded = 0;

  for (var i = 0; i < userIds.length; i++) {
    (function (idx) {
      load(userIds[idx], function(user) {
        users[idx] = user;
        loaded++;
        if (loaded === userIds.length) {
          done(users);
        }
        
      });
    })(i);
  }
}

module.exports = loadUsers;
