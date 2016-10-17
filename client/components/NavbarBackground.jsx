import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../theme/NavbarBackground.scss';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import auth from './utils/helpers/requests';
import uuid from 'node-uuid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavbarBackground extends Component {

  constructor() {
    super();
    this.state = {
      coins: []
    };
  }

  logout() {
    auth.logout.call(auth)
  }

  handleAdd(event) {
    const coinVal = event.target.id;
    const newCoins = [];
    newCoins.push(coinVal);    
    this.setState({coins: newCoins});
  }

  handleRemove(i) {
    const newCoins = this.state.coins.slice();
    newCoins.splice(i, 1);
    this.setState({coins: newCoins});
  }

  componentDidUpdate() {
    const coinCheck = this.state.coins[0];

    if(coinCheck == 'penny' || coinCheck == 'nickel' || coinCheck == 'dime' || coinCheck == 'quarter'){
      this.handleRemove(0);
    }  
  }

  render() {
    const coins = this.state.coins.map((coin, i) => (
      <div key={coin} id="coin-img" className={coin}></div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={ {
            enter: 'enter',
            enterActive: 'enterActive',
            leave: 'leave',
            leaveActive: 'leaveActive'
          } }
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {coins}
        </ReactCSSTransitionGroup>
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
