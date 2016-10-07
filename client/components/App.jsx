import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'

export default React.createClass({
  render() {
    return (
      <div className="page-wrap">
        <Navbar default>
          <Navbar.Header>
            <Navbar.Brand>
              <img className="logo-dollar" src="assets/images/cc_grade.png" />
            </Navbar.Brand>
            <Navbar.Brand>
              Cash Cache
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
              {/* Home */}
              <LinkContainer to={{ pathname: '/'}}>
                <NavItem eventKey={1} href="#">Home</NavItem>
              </LinkContainer>
              {/* About */}
              <LinkContainer to={{ pathname: '/about'}}>
                <NavItem eventKey={2} href="#">About</NavItem>
              </LinkContainer>
              {/* Tools */}
              <LinkContainer to={{ pathname: '/tools'}}>
                <NavItem eventKey={3} href="#">Tools</NavItem>
              </LinkContainer>
              {/* Login */}
              <LinkContainer to={{ pathname: '/login'}}>
                <NavItem eventKey={4} href="#">Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="content">
          {this.props.children}
        </div>


      </div>



    )
  }
})
