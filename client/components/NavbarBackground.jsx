import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../theme/NavbarBackground.scss';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import auth from './utils/helpers/requests';
import uuid from 'node-uuid';

export default class NavbarBackground extends Component {

  logout() {
    auth.logout.call(auth)
  }

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Cash Cache</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {/* Logo in navbar */}
          <div className="circle">
            <img className="logo-dollar" src="assets/images/cc_grade.png" />
          </div>
          <Navbar.Collapse>
            <Nav pullRight>
              <IndexLinkContainer to="/" activeHref="active">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              {this.props.loggedIn ? (
                [
                  <LinkContainer key={uuid.v4()} to="/tools" activeHref="active">
                    <NavItem>Tools</NavItem>
                  </LinkContainer>,
                  <NavItem key={uuid.v4()} onMouseUp={this.logout}>Log Out</NavItem>
                ]
              ) : (
                [
                  <LinkContainer key={uuid.v4()} to="/about" activeHref="active">
                    <NavItem>About</NavItem>
                  </LinkContainer>,
                  <LinkContainer key={uuid.v4()} to="/login" activeHref="active">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                ]
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Background images */}
        <img id="piggy" src="assets/images/piggy.png" />
        <img id="graph-foot" src="assets/images/graph_grade2.png" />
      </div>
    )
  }

}
