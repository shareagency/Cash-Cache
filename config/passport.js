// Load all strategies
var LocalStrategy = require('passport-local').Strategy;
var RememberMeStrategy = require('passport-remember-me').Strategy;

// Load up the user model
var bcrypt = require('bcrypt-nodejs');
var User  = require('../models/userModel');
var Promise = require('bluebird');

module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    // Find username
    User.findById(id, function(err, user) {
      done(null, user);
    });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-signup',
    new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) {

        // check for duplicate email before checking for username
        function checkEmail(email) {
          return new Promise(function(resolve, reject) {
            User.count({email: email}, function (err, count){
              if(count > 0){
                console.log('Email already exists!');
                reject('email already in use');
              }else{
                console.log('Valid Email');
                resolve(email)
              }
            });
          });
        };

        // check email then check username & save
        checkEmail(req.body.email)
        .then(function checkUserAndSave(email) {

          // find any existing users by username
          User.findOne({username: username}).exec()
          // add inserted coin
          .then(function(user) {
            var regex = /^[a-zA-Z0-9]+$/;
            if(!username.match(regex)) {
              return done({
                message: 'Please only use alpha-numeric characters with no spaces'
              }, false)
            }
            // Create if not
            var user = new User({
              email: email,
              username: username,
              password: bcrypt.hashSync(password, null, null) // use the generateHash function in our user model
            });
            return user.save();
          })
          // log & respond updated user
          .then(function(user) {
            console.log('new user: ', user);
            done(null, user)
          })
          // catch username & save errs any errors
          .catch(function(err) {
            console.log('ERROR: ', err);
            return done({
              err: err,
              message: 'This username is already in use'
            }, false)

          })

        })

        // catch any many email validation errors
        .catch(function(errMsg) {
          done({
            message: errMsg
          }, false);
        })

      })
  );

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-login',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, username, password, done) {
        // Search for username
        User
          .findOne({
            username: username
          })
          .exec(function(err, user) {
            if (err) done({err: err, message: 'Error finding user'});
            // Check if username is found
            if (user == null)
              return done({message: 'Username not found!'}, false);
            // Check if passwords match
            if (!bcrypt.compareSync(password, user.password))
              return done({message: 'Password did not match!'}, false);
            // If all well
            return done(null, user);
          })
      })
  );

  // =========================================================================
  // REMEMBER ME =============================================================
  // =========================================================================

  passport.use(new RememberMeStrategy(
    function(token, done) {
      Token.consume(token, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    },
    function(user, done) {
      var token = utils.generateToken(64);
      Token.save(token, { userId: user.id }, function(err) {
        if (err) { return done(err); }
        return done(null, token);
      });
    }
  ));

};
