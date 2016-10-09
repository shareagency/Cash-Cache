import axios from 'axios';
import Promise from 'bluebird';

// validate email
let validateEmail = (email) => {
  if (email === '') {
    return 'Please enter your email';
  }
  if (email.length < 6) {
    return 'Please enter a valid email';
  }
  return false;
};

// validate username
let validateUsername = (username) => {
  if (username === '') {
    return 'Please enter a username';
  }
  if (username.length < 6) {
    return 'Username must be 6 characters long';
  }
  return false;
};

// validate password
let validatePassword = (password) => {
  if (password === '') {
    return 'Please enter a password';
  }
  if (password.length < 8) {
    return 'Pasword must be 8 characters long';
  }
  return false;
};


export default {

  login: function(username, password, cb) {
      var valData = {
        isValid: false,
        valMsg: {passwordErrMsg: '', usernameErrMsg: ''}
      };

      let usernameErrMsg = validateUsername(username);
      let passwordErrMsg = validatePassword(password);
      // validate username
      if (usernameErrMsg !== false) {
        valData.valMsg.usernameErrMsg = usernameErrMsg;
        cb(valData);
        return;
      }
      // validate password
      if (passwordErrMsg !== false) {
        valData.valMsg.passwordErrMsg = passwordErrMsg;
        cb(valData);
        return;
      }

      valData.isValid = true;
      cb(valData);
  },

  signup: function(email, username, password, cb) {
      var valData = {
        isValid: false,
        valMsg: {emailErrMsg: '', passwordErrMsg: '', usernameErrMsg: ''}
      };

      let emailErrMsg = validateEmail(email);
      let usernameErrMsg = validateUsername(username);
      let passwordErrMsg = validatePassword(password);

      // validate password
      if (emailErrMsg !== false) {
        valData.valMsg.emailErrMsg = emailErrMsg;
        cb(valData);
        return;
      }
      // validate username
      if (usernameErrMsg !== false) {
        valData.valMsg.usernameErrMsg = usernameErrMsg;
        cb(valData);
        return;
      }
      // validate password
      if (passwordErrMsg !== false) {
        valData.valMsg.passwordErrMsg = passwordErrMsg;
        cb(valData);
        return;
      }

      valData.isValid = true;
      cb(valData);
  }

};
