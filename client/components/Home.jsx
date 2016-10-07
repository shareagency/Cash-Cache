import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
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
                  <input type="text" className="form-control money-input" name="email" placeholder="Your Email Address" />             
                  <label className="user-square"></label>  
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <input type="text" className="form-control money-input" name="username" placeholder="Choose a username" />             
                  <label className="user-square"></label>  
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <input type="password" className="form-control money-input" name="password" placeholder="Create a password" />
                  <label className="user-square"></label> 
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <p className="terms-text">I have read and agree to the <span><a className="terms-link" href="#">Cash Cache terms of use.</a></span></p>
                  <div id="terms" className="user-square-check"></div>
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
