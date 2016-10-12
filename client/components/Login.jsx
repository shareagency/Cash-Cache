import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import requests from './utils/helpers/requests';
import validate from './utils/helpers/validate';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      usernameErrMsg: '',
      passwordErrMsg: ''
    };
  }

  handleChange = (name, value) => {
   this.setState({...this.state, [name]: value});
  };

  // submit form on enter
  handleBtnPress = (e) => {
    if (e.charCode == 13) {
        this.validate();
      }
  };

  // validate user input
  validate = () => {
    let username = this.state.username.toLowerCase();
    let password = this.state.password;

    validate.login(username, password ,function(valData) {
      if (valData.isValid) {
        return this.handleLogin(username, password);
      }
      this.setState(valData.valMsg);
      return;
    }.bind(this))
  };

  // send login post request
  handleLogin = (username, password) => {

    requests.login(username, password)
    .then(function(resData) {
      // display any validation errors
      if (resData.valErr) {
        return this.setState(resData.valErr);
      }
      console.log('Login response: ', JSON.stringify(resData));
      // TODO: redirect to tools page
      hashHistory.push(resData.redirect);

      return;
    }.bind(this))
    // log any request errors
    .catch(function(err, msg) {
      console.log('Login error: ', err);
    });
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">

            <Card id="card-login">
              <CardTitle
                avatar="assets/images/cc_grade.png"
                title="Login or Sign Up"
                subtitle="Required Fields *"
              />
              <CardText>
                {/* username */}
                <Input type='text' onKeyPress={(e) => this.handleBtnPress(e)} error={this.state.usernameErrMsg}
                label='Username' name='name' required={true} value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                {/* password */}
                <Input type='password' onKeyPress={(e) => this.handleBtnPress(e)} error={this.state.passwordErrMsg}
                label='Password' required={true} value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
              </CardText>

              <CardActions>
                <Button label='Log In' raised primary onMouseUp={this.validate.bind(this)}/>
              </CardActions>
            </Card>

          </div>
        </div>
      </div>

    )

  }
}
