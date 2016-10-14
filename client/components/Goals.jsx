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
    newState['now'] = this.calculatePercentage(value);
    this.setState(newState);
  };

  calculatePercentage = (value) => {
    var percent = this.props.total/value*100;
    var now = (percent <= 100) ? percent : 100;
    var round = Number(Math.round(now+'e2')+'e-2') // rounds to two decimals
    return round;
  };

  componentWillMount () {
    setTimeout(() => {
      this.setState({
        now: this.calculatePercentage(this.state.slider)
      });
    }, 600);
  }

  render() {

    var now = this.state.now;

    return (
      <div className="holder">
        <div>
          <div id="dollar-sign">$</div>
          <Slider theme={sliderTheme} min={0} max={100} editable value={this.state.slider} onChange={this.handleChange.bind(this, 'slider')} />
        </div>
        <ProgressBar striped bsStyle="success" now={now} label={`${now}% to Goal`} />
      </div>
    )
  }

}
