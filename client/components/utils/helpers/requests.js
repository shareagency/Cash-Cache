import axios from 'axios';
import Promise from 'bluebird';

export default {

  login: function(username, password) {
    return new Promise(function(resolve, reject) {

      axios.post('/login', {
        username: username,
        password: password
      })
      .then(function (response) {
        let msg = response.data.message;

        if (msg !== 'success') {
          if (msg === 'Password did not match!') {
             resolve({ valErr: {passwordErrMsg: msg, usernameErrMsg: ''}});
            return
          }
          if (msg === "Username not found!") {
            resolve({ valErr: {passwordErrMsg: '', usernameErrMsg: msg}});
            return
          }
        }
        resolve(response.data);
      })
      .catch(function (err) {
        reject(err);
      });

    });
  }

};
