import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Signup from './Signup';

export default class Landing extends Component {

  render() {
    return (
        <div className="row">

          <Col md={6}>
            <h1>Start Saving Today!</h1>
            <ul className="features">
              <li>Cash Cache is a smart piggy bank with features and tools to help you track and grow your savings.</li>
              <li>Set goals for yourself and share your achievements with your friends and family members on social media.</li>
              <li>Customize your profile with inspirational imagery and notes to stay motivated and keep your eye on the prize.</li>
              <li>Gain access to helpful tips and information to assist you along your savings journey.</li>
            </ul>
          </Col>

          <Col md={6}>
            <Signup />
          </Col>

        </div>
    )
  }

}
