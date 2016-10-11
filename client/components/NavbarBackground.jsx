import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import '../theme/NavbarBackground.scss';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavbarBackground extends Component {

  constructor() {
    super();
    this.state = {
      coins: []
    };
  }

  handleAdd(event) {
    var coinVal = event.target.id;

    var newCoins = [];

    newCoins.push(coinVal);
    
    this.setState({coins: newCoins});
    console.log(newCoins);
  }

  handleRemove(i) {
    var newCoins = this.state.coins.slice();
    newCoins.splice(i, 1);
    this.setState({coins: newCoins});
  }

  render() {
    console.log(this.state.coins);
    var coins = this.state.coins.map((coin, i) => (
      <div key={coin} id="coin-img" className={coin} onClick={() => this.handleRemove(i)}></div>
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
          transitionEnterTimeout={500}
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
              <IndexLinkContainer to="/" activeHref="active">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/about" activeHref="active">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/tools" activeHref="active">
                <NavItem>Tools</NavItem>
              </LinkContainer>
              <LinkContainer to="/login" activeHref="active">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <button id="penny" onClick={this.handleAdd.bind(this)}>Add Penny</button>
        <button id="nickel" onClick={this.handleAdd.bind(this)}>Add Nickel</button>
        <button id="dime" onClick={this.handleAdd.bind(this)}>Add Dime</button>
        <button id="quarter" onClick={this.handleAdd.bind(this)}>Add Quarter</button>
        {/* Background images */}
        <img id="piggy-front" src="assets/images/piggy_front.png" />
        <img id="piggy" src="assets/images/piggy_light.png" />
        <img id="graph-foot" src="assets/images/graph_grade2.png" />
      </div>
    )
  }

}
