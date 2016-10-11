import React, { Component } from 'react';
import auth from './utils/helpers/requests';
import { Link } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import Navbar from './NavbarBackground';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navDisplay2: "none",
      loggedIn: auth.loggedIn()
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth;
  }

  logout() {
    auth.logout.call(auth)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.state.loggedIn ? (
            <div>
              <h1>Logged In</h1>
              <Button label='Log Out' raised primary onMouseUp={this.logout} />
            </div>
          ) : (
            <h1>Logged Out</h1>
          )}
          {this.props.children}
        </div>
      </div>
    )
  }

}
