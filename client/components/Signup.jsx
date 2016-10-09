import React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import requests from './utils/helpers/requests';
import validate from './utils/helpers/validate';

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '', username: '', password: '', usernameErrMsg: '', emailErrMsg: '', passwordErrMsg: ''
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
    let email = this.state.email
    let username = this.state.username.toLowerCase();
    let password = this.state.password;

    validate.signup(email, username, password ,function(valData) {
      if (valData.isValid) {
        this.handleSignUp(email, username, password);
        return;
      }
      this.setState(valData.valMsg);
      return;
    }.bind(this))
  };

  // send signin post request
  handleSignUp = (email, username, password) => {

    requests.signup(email, username, password)
    .then(function(resData) {
      // display any validation errors
      if (resData.valErr) {
          this.setState(resData.valErr);
          return;
      }
      console.log('Login response: ', JSON.stringify(resData));
      // TODO: redirect to user page


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
                title="Signup for our free service"
                subtitle="Required Fields *"
              />
              <CardText>
                {/* email */}
                <Input type='email' onKeyPress={(e) => this.handleBtnPress(e)} error={this.state.emailErrMsg}
                  label='Email' name='name' required={true} value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                {/* username */}
                <Input type='text' onKeyPress={(e) => this.handleBtnPress(e)} error={this.state.usernameErrMsg}
                  label='Username' name='name' required={true} value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                {/* password */}
                <Input type='password' onKeyPress={(e) => this.handleBtnPress(e)} error={this.state.passwordErrMsg}
                  label='Password' required={true} value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
              </CardText>

              <CardActions>
                <Button label='Sign Up' raised primary onMouseUp={this.validate.bind(this)}/>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>

    )

  }
}
