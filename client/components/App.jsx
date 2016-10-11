import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout } from 'react-toolbox';
import Navbar from './NavbarBackground';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      navDisplay2: "none"
    };
  }

  render() {

    return (

      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>

    )
  }

}
