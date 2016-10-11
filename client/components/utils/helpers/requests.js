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
        }

        console.log('Message: ', msg);
        resolve(response.data);
      })
      .catch(function (err) {
        reject(err);
      });

    });
  },

  getToken() {
    return (typeof window !== "undefined") ? localStorage.token : undefined;
  },

  logout(cb) {
    get('/auth/signout')
      .then((g) => {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
      }).catch((err) => {
        console.log(err);
      });
  },

  loggedIn() {
    return !!((typeof window !== "undefined") ? localStorage.token : undefined)
  },

  onChange() {}

};
