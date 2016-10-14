import axios from 'axios';
import Promise from 'bluebird';
import { hashHistory } from 'react-router';

export default {

  login: function(username, password) {
    var _this = this;
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

        // Authentication
        sessionStorage.token = Math.random().toString(36).substring(7);
        _this.onChange(true);

        resolve(response.data);
      })
      .catch(function (err) {
        // Authentication
        _this.onChange(false);

        reject(err);
      });

    });
  },

  signup: function(email, username, password) {
    return new Promise(function(resolve, reject) {

      axios.post('/signup', {
        email: email,
        username: username,
        password: password
      })
      .then(function (response) {
        let msg = response.data.message;
        if (msg !== 'success') {
          if (msg === 'Email already in use') {
             resolve({ valErr: {emailErrMsg: msg, passwordErrMsg: '', usernameErrMsg: ''}});
            return
          }
          if (msg === 'This username is already in use') {
            resolve({ valErr: {emailErrMsg: '', passwordErrMsg: '', usernameErrMsg: msg}});
            return
          }
          if (msg === 'email already in use') {
            resolve({ valErr: {emailErrMsg: msg, passwordErrMsg: '', usernameErrMsg: ''}});
            return
          }
        }

        console.log('Message: ', msg);
        resolve(response.data);
      })
      .catch(function (err) {
        reject(err);
      });

    });
  },

  logout: function() {
    var _this = this;
    axios.get('/logout')
      .then((response) => {
        delete sessionStorage.token
        _this.onChange(false)
        hashHistory.push('/');
      }).catch((err) => {
        console.log(err);
      });
  },

  loggedIn: function() {
    return !!((typeof window !== "undefined") ? sessionStorage.token : undefined)
  },

  getUserAndCoins: function(cb) {

    axios.get('/coin')
    .then((response) => {
      let userData = response.data;
      cb(false, userData);
      return;
    })
    .catch((err) => {
      cb(err);
      return;
    });

  },

  onChange() {}

};
