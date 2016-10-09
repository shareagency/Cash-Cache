import axios from 'axios';
import Promise from 'bluebird';

export default {

  login: function(username, password) {
    return new Promise(function validateLogin(resolve, reject) {
      var valData = {
        isValid: false,
        valMsg: {passwordErrMsg: '', usernameErrMsg: ''}
      };

      // validate username
      if (username === '') {
        valData.valMsg.usernameErrMsg = 'Please enter a username';
        resolve(valData);
        return;
      }
      if (username.length < 6) {
        valData.valMsg.usernameErrMsg = 'Username must be 6 characters long!';
        resolve(valData);
        return;
      }
      // validate password
      if (password === '') {
        valData.valMsg.passwordErrMsg = 'Please enter a password';
        resolve(valData);
        return;
      }
      if (password.length < 8) {
        valData.valMsg.passwordErrMsg = 'Pasword must be 8 characters long!';
        resolve(valData);
        return;
      }

      valData.isValid = true;
      resolve(valData);

    });
  }

};
