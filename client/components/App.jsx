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
        <Navbar loggedIn={this.state.loggedIn} />
        <div className="container">
          {this.props.children && React.cloneElement(this.props.children, {
            loggedIn: this.state.loggedIn
          })}
        </div>
      </div>

    )
  }

}
