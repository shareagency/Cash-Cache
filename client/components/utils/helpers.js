//var User = require('../../../models/userModel.js');

// Helper Functions (in this case the only one is runQuery)
var helpers = {
 
  checkEmail: function(emailAddress){

    console.log(emailAddress);

    User.count({email: emailAddress}, function (err, count){ 
      if(count > 0){
        console.log('Already exists!');
      }else{
        // now, save that entry to the db
        console.log('Good To Go!'); 
      }
    });

  },

  checkUser: function(user){

    console.log(user);

    User.count({username: user}, function (err, count){ 
      if(count > 0){
        console.log('Already exists!');
      }else{
        // now, save that entry to the db
        console.log('Good To Go!'); 
      }
    });

  }

}

// We export the helpers function 
module.exports = helpers;