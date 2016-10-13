var User = require('../models/userModel');

module.exports = function(req, res) {
  var username = req.user.username;
  console.log('Coins requested');
  if (!username) {
    res.json({
      err: 'could not determin username',
      errMsg: 'Username is undefined'
    });
    return;
  }

  User.findOne({username: username}).exec()
  // add inserted coin
  .then(function(user) {
    var newUser = {};
    var coins = user.coins;
    newUser.coins = [coins.pennies, coins.nickels, coins.dimes, coins.quarters]
    newUser.username = user.username;
    return newUser;
  })
  .then(function(newUser) {
    console.log('User: ', newUser);
    res.json({
      status: 'ok',
      userData: newUser
    });
  })
  // catch any errors
  .catch(function(err) {
    console.log('ERROR: ', err);
    res.json({
      status: 'error',
      errMsg: 'Query err: ' + err
    });
  })
  

};
