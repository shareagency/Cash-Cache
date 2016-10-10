import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState() {
    return {
      navDisplay2: "none",
      animate: "",
      animateTarget: "",
      coins: []
    }
  },

  navToggle() {

    if(this.state.navDisplay2 == "none") {
      this.setState({
        navDisplay2: ""
      })
    }else{
      this.setState({
        navDisplay2: "none"
      }) 
    }

  },

  handleAdd(event) {
    var coinVal = event.target.id;

    var newCoins = [];

    newCoins.push(coinVal);
    
    this.setState({coins: newCoins});
    console.log(newCoins);
  },

  handleRemove(i) {
    var newCoins = this.state.coins.slice();
    newCoins.splice(i, 1);
    this.setState({coins: newCoins});
  },

  componentDidUpdate() {
    console.log("UPDATED");  
  },

  render() {
    console.log(this.state.coins);
    var coins = this.state.coins.map((coin, i) => (
      <div key={coin} id="coin-img" className={coin} onClick={() => this.handleRemove(i)}></div>
    ));

    return (
      <div className="page-wrap">
        <ReactCSSTransitionGroup
          transitionName={ {
            enter: 'enter',
            enterActive: 'enterActive',
            leave: 'leave',
            leaveActive: 'leaveActive'
          } }
          transitionEnterTimeout={500}
          transitionLeaveTimeout={800}>
          {coins}
        </ReactCSSTransitionGroup>
        <div className="circle"></div>
        <img className="logo-dollar" src="assets/images/cc_grade.png" />
        <span className="logo-text">CASH CACHE</span>

        <nav className="header navbar navbar-inverse navbar-fixed-top" role="navigation">

            <button id="nav-switch" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar" onClick={this.navToggle}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="head-wrap">

              <div id="navbar" className="navbar-collapse collapse cash-nav-wrap float-right">
                  <Link to="/" className="cash-nav">Home</Link>
                  <a className="cash-nav" href="/about">About</a>
                  <a className="cash-nav" href="/tools">Tools</a>
                  <Link to="/login" className="cash-nav">Login</Link>
                  <Link to="/signup" className="cash-nav">Sign Up</Link>
              </div>

            </div>

        </nav>

        <div id="navbar1" style={{display: this.state.navDisplay2}}>
          <ul className="resp-nav-wrap">
            <li role="separator" className="divider"></li>
            <li className="li-pad">
              <Link to="/" className="resp-cash-nav">Home</Link>
            </li>
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/about">About</a></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/tools">Tools</a></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad">
              <Link to="/login" className="resp-cash-nav">Login</Link>
            </li>
            <li role="separator" className="divider"></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad">
              <Link to="/signup" className="resp-cash-nav">Sign Up</Link>
            </li>
          </ul>
        </div>

        <button id="penny" onClick={this.handleAdd}>Add Penny</button>
        <button id="nickel" onClick={this.handleAdd}>Add Nickel</button>
        <button id="dime" onClick={this.handleAdd}>Add Dime</button>
        <button id="quarter" onClick={this.handleAdd}>Add Quarter</button>

        <div className="content">
          {this.props.children}
        </div>

        <img className="piggy-front" src="assets/images/piggy_front.png" />
        <img className="piggy" src="assets/images/piggy_light.png" />

        <img className="graph-foot" src="assets/images/graph_grade2.png" />

      </div>

    )
  }
})
