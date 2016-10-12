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
            <Tab label='Smart Piggy Bank'><small className="about-tab">Cash Cache is a smart piggy bank with features and tools to help children and teens track and grow their savings. The Cash Cache app can be used with our unique coin collector designed to transmit and save your deposits directly to your FREE Cash Cache account. This straightforward application also allows for deposits to be manually added to you user acoount without the use of the optional coin collector.<br/><br/>Parents have found Cash Cache to be a useful tool for teaching their children lessons about the importance of having a consistent regimen. Cash Cache not only helps create a conducive environment for setting goals, but encourages further engagement through the visual representation of progress and achievements.<br/><br/>Our mission is to create valuable savings tools that are simple to use and easy to comprehend. Cash Cache is proud to make these tools free and accessible to any person that can benefit from them.</small></Tab>
            <Tab label='Track Savings'><small className="about-tab">Set goals for yourself and share your achievements with your friends and family members on social media.</small></Tab>
            <Tab label='Tips About Saving'><small className="about-tab">Gain access to helpful tips and information to assist you along your savings journey.</small></Tab>
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
