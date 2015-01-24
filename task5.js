function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(su) {
      return goodUsers.some(function(gu) { return gu.id === su.id; }); 
    });
  };
}

module.exports = checkUsersValid;
