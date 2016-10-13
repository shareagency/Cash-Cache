import React, { Component } from 'react';
import Slider from 'react-toolbox/lib/slider';
import { ProgressBar } from 'react-bootstrap';
import sliderTheme from '../theme/Goals.scss';

export default class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      now: 0,
      slider: 50
    };
  }

  handleChange = (slider, value) => {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  };

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        now: 40
      })
    }, 1000);
  }

  render() {

    var now = this.state.now;

    return (
      <div>
        <h1>Set Your Goal</h1>
        <div>
          <div id="dollar-sign">$</div>
          <Slider theme={sliderTheme} min={0} max={100} editable value={this.state.slider} onChange={this.handleChange.bind(this, 'slider')} />
        </div>
        <ProgressBar striped bsStyle="success" now={now} label={`${now}% to Goal`} />
      </div>
    )
  }

}
