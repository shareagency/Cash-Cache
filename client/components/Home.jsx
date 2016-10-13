import React, { Component } from 'react';
import Tools from './Tools';
import Landing from './Landing';
import '../theme/Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.loggedIn ? <Tools /> : <Landing />}</div>
  }

}
