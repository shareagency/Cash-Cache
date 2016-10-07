import React from 'react'
import { Link } from 'react-router'
// import {helpers} from './utils/helpers.js';
// Helper Function
var helpers = require('./utils/helpers.js');

export default React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState: function(){
    return {
      email: "",
      username: "",
      password: "",
      strength: "signal-color"
    }
  },

  // This function will respond to the user input 
  handleBlur: function(event){

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details: 
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    // var newState = {};
    // newState[event.target.id] = event.target.value;
    // this.setState(newState);
    // Run the helper query for articles
    var sentVal = event.target.value;
    var sentId = event.target.name;

    if(sentId == "username"){
      helpers.checkUser(sentVal)
        .then(function(data){
          //checks if there are results sent back from api
          console.log(data);
          // if (data != this.state.results)
          // {
          //   console.log("Search" , data);

          //   var queryArr = data.data.response.docs; //set response to a variable
          //   var newResults = []; //create empty array to push to
          //   //loop through response and push each article to the array
          //   for(var i=0; i<queryArr.length; i++){
          //     newResults.push(queryArr[i]);
          //   }

          //   //update the results state with the retrieved articles
          //   this.setState({
          //     results: newResults
          //   })

          // }
        });
      } else if(sentId == "email"){
        helpers.checkEmail(sentVal)
        .then(function(data){
          //checks if there are results sent back from api
          console.log(data);
          // if (data != this.state.results)
          // {
          //   console.log("Search" , data);

          //   var queryArr = data.data.response.docs; //set response to a variable
          //   var newResults = []; //create empty array to push to
          //   //loop through response and push each article to the array
          //   for(var i=0; i<queryArr.length; i++){
          //     newResults.push(queryArr[i]);
          //   }

          //   //update the results state with the retrieved articles
          //   this.setState({
          //     results: newResults
          //   })

          // }
        }); 
      }

  },

  // This function will respond to the user input 
  handleChange: function(event){

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

  // When a user submits... 
  // handleClick: function(){

  //   console.log("CLICK");

  //   //check to make sure all of the fields have been filled out
  //   if (this.state.term === "" || this.state.startDate === "" || this.state.endDate === "") {
  //     alert('Please fill out the entire form.');
  //   } else {
  //     console.log("UPDATED");

  //     // Run the helper query for articles
  //     helpers.runQuery(this.state.term, this.state.startDate, this.state.endDate)
  //       .then(function(data){
  //         //checks if there are results sent back from api
  //         if (data != this.state.results)
  //         {
  //           console.log("Search" , data);

  //           var queryArr = data.data.response.docs; //set response to a variable
  //           var newResults = []; //create empty array to push to
  //           //loop through response and push each article to the array
  //           for(var i=0; i<queryArr.length; i++){
  //             newResults.push(queryArr[i]);
  //           }

  //           //update the results state with the retrieved articles
  //           this.setState({
  //             results: newResults
  //           })

  //         }
  //       }.bind(this))
        
  //   }

  // },

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
                  <div id="terms" className="user-square-check">
                    <img id="terms-select" className="hide terms-check" data-check="unchecked" src="assets/images/cc_grade.png" />
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
