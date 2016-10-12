import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import { List, ListItem, ListSubHeader } from 'react-toolbox/lib/list';
import {Tab, Tabs} from 'react-toolbox';
import '../theme/About.scss';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      featured: "smart-pig"
    };
  }

  handleTabChange = (index) => {
    console.log("INDEX", index);
    this.setState({index});
    switch(index) {
      case 0:
        this.setState({featured: "smart-pig"});
        break;
      case 1:
        this.setState({featured: "pie-chart"});
        break;
      case 2:
        this.setState({featured: "money"});
        break;
      default:
        this.setState({featured: "smart-pig"});
    }
  };

  render() {
    return (
      <div className="row">

        <Col md={6}>
          <h1>About Cash Cache</h1>
          <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
            <Tab label='Smart Piggy Bank'><small>Cash Cache is a smart piggy bank with features and tools to help kids track and grow their savings. The Cash Cache app can be used with our unique coin collector that transmits and saves your deposits directly to your FREE Cash Cache account.</small></Tab>
            <Tab label='Track Savings'><small>Set goals for yourself and share your achievements with your friends and family members on social media.</small></Tab>
            <Tab label='Tips About Saving'><small>Gain access to helpful tips and information to assist you along your savings journey.</small></Tab>
          </Tabs>
        </Col>

        <Col md={6}>
          <div className="about-img">
            <div className={this.state.featured}></div>
          </div>
        </Col>

      </div>
    )
  }

}
