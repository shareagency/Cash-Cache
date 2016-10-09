import React from 'react';
import {Component} from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import requests from './utils/helpers/requests';
import validate from './utils/helpers/validate';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '', password: '', usernameErrMsg: '', passwordErrMsg: ''
    };
  }

  handleChange = (name, value) => {
   this.setState({...this.state, [name]: value});
  };

  // submit form on enter
  handleBtnPress = (e) => {
    console.log(e.charCode);
    if (e.charCode == 13) {
        this.validate();
      }
  };

  // validate user input
  validate = () => {
    let username = this.state.username.toLowerCase();
    let password = this.state.password;

    validate.login(username, password)
    .then(function(valData) {
      if (valData.isValid) {
        this.handleLogin(username, password);
        return;
      }
      this.setState(valData.valMsg);
    }.bind(this))
    .catch(function(err) {
      console.log('Validation error: ', err);
    })
  };

  // send login post request
  handleLogin = (username, password) => {

    requests.login(username, password)
    .then(function(resData) {
      // display any validation errors
      if (resData.valErr) {
          this.setState(resData.valErr);
          return;
      }
      console.log('Login response: ', JSON.stringify(resData));
      // TODO: redirect to tools page


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
