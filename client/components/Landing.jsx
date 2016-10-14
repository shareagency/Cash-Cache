import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Info from './Info';
import Signup from './Signup';

export default class Landing extends Component {

  render() {
    return (
        <div className="row">

          <br/>

          <Col md={6}>
            <Info />
          </Col>

          <Col md={6}>
            <Signup />
          </Col>

        </div>
    )
  }

}
