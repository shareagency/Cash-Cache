import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

export default React.createClass({
  render() {
    return (
      <div className="page-wrap">
        <div className="circle"></div>
        <img className="logo-dollar" src="assets/images/cc_grade.png" />

        <nav className="header navbar navbar-inverse navbar-fixed-top" role="navigation">

            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div className="head-wrap">
              <span className="logo-text">CASH CACHE</span>

              <div id="navbar" className="navbar-collapse collapse cash-nav-wrap float-right">
                  <a className="cash-nav" href="/">Home</a>
                  <a className="cash-nav" href="/about">About</a>
                  <a className="cash-nav" href="/tools">Tools</a>
                  <a className="cash-nav" href="/login">Log In</a>
                  <a className="cash-nav" href="/signup">Sign Up</a>
              </div>
            </div>

        </nav>

        <ul id="navbar1" className="collapse resp-nav-wrap">
          <li role="separator" className="divider"></li>
          <li className="li-pad"><a className="resp-cash-nav" href="/">Home</a></li>
          <li role="separator" className="divider"></li>
          <li className="li-pad"><a className="resp-cash-nav" href="/about">About</a></li>
          <li role="separator" className="divider"></li>
          <li className="li-pad"><a className="resp-cash-nav" href="/tools">Tools</a></li>
          <li role="separator" className="divider"></li>
          <li className="li-pad"><a className="resp-cash-nav" href="/login">Log In</a></li>
          <li role="separator" className="divider"></li>
          <li className="li-pad"><a className="resp-cash-nav" href="/signup">Sign Up</a></li>
        </ul>

        <div className="content">
          {this.props.children}
        </div>


      </div>



    )
  }
})
