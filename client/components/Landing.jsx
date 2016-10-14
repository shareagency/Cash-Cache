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
              <li>Cash Cache is a smart piggy bank with features and tools to help children and teens become smart and frequent savers.</li>
              <li>Use the Cash Cache dashboard to establish attainable savings goals and track the growth of your savings.</li>
              <li>Stay engaged with your investments through our visually logical graphs that chart your progress.</li>
              <li>Gain access to helpful tips and information to assist you along your savings journey.</li>
              <li>Start your FREE Cash Cache account in only a few seconds!</li>
            </ul>
          </Col>

          <Col md={6}>
            <Signup />
          </Col>

        </div>
    )
  }

}
