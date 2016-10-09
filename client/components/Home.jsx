import React from 'react'
import { Link } from 'react-router'
// Helper Function
var helpers = require('./utils/helpers.js');

export default React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState(){
    return {
      email: "",
      username: "",
      password: "",
      strength: "signal-color",
      checked: "unchecked",
      checkImg: "hide terms-check"
    }
  },

  // This function will respond to the user input 
  handleBlur(event){

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

  },

  // This function will respond to the user input 
  handleChange(event){

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

  },

  checkToggle(){

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

  },

  render() {
    return (
      <div>
        <div className="charting">

        <div className="row">
          <div className="col-md-7 pad-right-125">

            <h1 className="marg-bottom-32">Start Saving Today!</h1>
            <h2 className="line-pad">Cash Cache is a smart piggy bank with features and tools to help you track and grow your savings.</h2>
            <h2 className="line-pad">Set goals for yourself and share your achievements with your friends and family members on social media.</h2>
            <h2 className="line-pad">Customize your profile with inspirational imagery and notes to stay motivated and keep your eye on the prize.</h2>
            <h2 className="line-pad">Gain access to helpful tips and information to assist you along your savings journey.</h2>
            
          </div>
          <div className="pad-left-25 col-md-5">

            <h1 className="marg-neg-20">User Sign Up</h1>

            <div id="message"></div>

            <form id="credentials">

              <div className="form-group">
                <div className="row">
                  <input type="text" className="form-control money-input" name="email" onBlur={this.handleBlur} placeholder="Your Email Address" />             
                  <label className="user-square">
                    <div className="signal-color strong"></div>
                  </label>  
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <input type="text" className="form-control money-input" name="username" onBlur={this.handleBlur} placeholder="Choose a username" />             
                  <label className="user-square">
                    <div className="signal-color strong"></div>
                  </label>  
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <input type="password" className="form-control money-input" name="password" onChange={this.handleChange} placeholder="Create a password" />
                  <label className="user-square">
                    <div className={this.state.strength}></div>
                  </label> 
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <p className="terms-text">I have read and agree to the <span><a className="terms-link" href="#">Cash Cache terms of use.</a></span></p>
                  <div id="terms" className="user-square-check" onClick={this.checkToggle}>
                    <img id="terms-select" className={this.state.checkImg} data-check={this.state.checked} src="assets/images/cc_grade.png" />
                  </div>
                  <button type="submit" className="btn sub-sign" id="signup"></button>
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>

      <img className="piggy" src="assets/images/piggy.png" />

      <img className="graph-foot" src="assets/images/graph_grade2.png" />
      </div>
    )
  }
})
