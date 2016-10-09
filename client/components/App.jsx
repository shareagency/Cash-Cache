import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState() {
    return {
      navDisplay2: "none"
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

  render() {
    return (
      <div className="page-wrap">

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
                  <a className="cash-nav" href="/">Home</a>
                  <a className="cash-nav" href="/about">About</a>
                  <a className="cash-nav" href="/tools">Tools</a>

                  <Link to="/login" className="cash-nav">Login</Link>

                  <a className="cash-nav" href="/signup">Sign Up</a>
              </div>

            </div>

        </nav>

        <div id="navbar1" style={{display: this.state.navDisplay2}}>
          <ul className="resp-nav-wrap">
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/">Home</a></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/about">About</a></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/tools">Tools</a></li>
            <li role="separator" className="divider"></li>
            <li className="li-pad">
              <Link to={{ pathname: '/login'}}>
                <span className="resp-cash-nav">Log In</span>
              </Link>
            </li>
            <li role="separator" className="divider"></li>
            <li className="li-pad"><a className="resp-cash-nav" href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div className="content">
          {this.props.children}
        </div>

        <img className="piggy" src="assets/images/piggy.png" />

        <img className="graph-foot" src="assets/images/graph_grade2.png" />

      </div>



    )
  }
})
