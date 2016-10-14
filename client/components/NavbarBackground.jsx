import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../theme/NavbarBackground.scss';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import auth from './utils/helpers/requests';
import uuid from 'node-uuid';

export default class NavbarBackground extends Component {

  constructor() {
    super();
  }

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
              {this.props.loggedIn ? (
                [
                  <IndexLinkContainer key={uuid.v4()} to="/" activeHref="active">
                    <NavItem>Dashboard</NavItem>
                  </IndexLinkContainer>,
                  <NavItem key={uuid.v4()} onMouseUp={this.logout}>Log Out</NavItem>
                ]
              ) : (
                [
                  <IndexLinkContainer key={uuid.v4()} to="/" activeHref="active">
                    <NavItem>Home</NavItem>
                  </IndexLinkContainer>,
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
        <img id="piggy-front" src="assets/images/piggy_front.png" />
        <img id="piggy" src="assets/images/piggy_light.png" />
        <img id="graph-foot" src="assets/images/graph_grade2.png" />
      </div>
    )
  }

}
