var User = require('../models/userModel');

// add coin to database
module.exports = function(req, res) {

  // determin coin value
  let coinValue = req.body.coinValue;
  let coinType = req.body.coinType
  console.log('posted coin value: ',coinValue);

  // if coin value could not be determined log and respond with error
  if (!coinType || !coinValue) {
    console.log('ERROR: coin could not be determined');
    res.json({
      status: 'error',
      err: 'coin type could not be determined'
    });
    return;
  }

  // find user by username
  User.find({username: 'user'}).exec()
  // add inserted coin
  .then(function(users) {
    var user = users[0]
    console.log('USER: ',user)
    user.coins[coinType] = user.coins[coinType] + 1;
    return user.save();
  })
  // log & respond updated user
  .then(function(newUser) {
    console.log('new user: ', newUser);
    res.json({
      status: 'ok',
      coins: newUser.coins
    });
  })
  // catch any errors
  .catch(function(err) {
    console.log('ERROR: ', err);
    res.json({
      status: 'error',
      errMsg: 'Database err: ' + err
    });
  })

}
