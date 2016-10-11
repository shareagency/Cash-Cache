import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import Signup from './Signup';
import auth from '../services/Authentication';
import '../theme/Home.scss';
// Helper Function
var helpers = require('./utils/helpers.js');

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      strength: "signal-color",
      checked: "unchecked",
      checkImg: "hide terms-check",
      loggedIn: false // auth.loggedIn()
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  }

  componentWillMount() {
    // auth.onChange = this.updateAuth;
  }

  // This function will respond to the user input 
  handleBlur(event) {

    var sentVal = event.target.value;
    var sentId = event.target.name;

    console.log(sentVal, sentId);

    if(sentId == "username"){
      helpers.checkUser(sentVal)
        .then(function(data){
          //checks if there are results sent back from api
          console.log(data);

        });
      } else if(sentId == "email"){
        helpers.checkEmail(sentVal)
        .then(function(data){
          //checks if there are results sent back from api
          console.log(data);

        }); 
      }

  }

  // This function will respond to the user input 
  handleChange(event) {

    var passVal = event.target.value;

    if(passVal.length <= 5){
      this.setState({
        strength: "signal-color weak"
      })
    }else if(passVal.length > 5 && passVal.length <= 8){
      this.setState({
        strength: "signal-color mod"
      })
    }else if(passVal.length > 8){
      this.setState({
        strength: "signal-color strong"
      })  
    }

  }

  checkToggle() {

    if(this.state.checked == "checked") {
      this.setState({
        checked: "unchecked",
        checkImg: "hide terms-check"
      })
    }
    else{
      this.setState({
        checked: "checked",
        checkImg: "show terms-check"
      })
    }

  }

  render() {
    return (
      <div className="row">

        <Col md={6}>
          {this.state.loggedIn ? (
            <h1>Logged In</h1>
          ) : (
            <h1>Logged Out</h1>
          )}
          <h1>Start Saving Today!</h1>
          <ul className="features">
            <li>Cash Cache is a smart piggy bank with features and tools to help you track and grow your savings.</li>
            <li>Set goals for yourself and share your achievements with your friends and family members on social media.</li>
            <li>Customize your profile with inspirational imagery and notes to stay motivated and keep your eye on the prize.</li>
            <li>Gain access to helpful tips and information to assist you along your savings journey.</li>
          </ul>
        </Col>

        <Col md={6}>
          <Signup />
        </Col>

      </div>
    )
  }

}
