import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import { Col } from 'react-bootstrap';
import {Pie as PieChart} from 'react-chartjs-2';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import '../theme/Tools.scss';
import io from 'socket.io-client';
import requests from './utils/helpers/requests';
import Goals from './Goals';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Tools extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coinData: [],
      username: '',
      coins: []
    };
  }

  componentWillMount() {
    // not logged in don't connect to socket or perform request
    if (!sessionStorage.token) return;
    this.getUserCoins();
    this.socket = io();
    this.socket.on('coin', this.handleCoinInput.bind(this));
  }

  handleCoinInput(socketData) {
    console.log(socketData);
    console.log(socketData.username);
    let username = this.state.username;
    if (socketData.username === username) {
      this.handleAdd(socketData.coin);
      this.getUserCoins();
    }
  }

  getUserCoins() {
    // get username & coins
    requests.getUserAndCoins(function(err, userData) {
      if (userData.status === 'ok') {
        this.updateUserData(userData);
        return;
      }
      console.log('Invalid server response: ',JSON.stringify(userData))
    }.bind(this))
  }
  // update state with users and coins
  updateUserData(user) {
    this.setState({
      coinData: user.userData.coins,
      username: user.userData.username
    })
  }
  // get add coins & return total
  handleTotal() {
    let coinData = this.state.coinData;
    let total = 0;
    coinData.forEach(function(num, index) {
      if (index === 0) total += num;
      if (index === 1) total += (num * 5);
      if (index === 2) total += (num * 10);
      if (index === 3) total += (num * 25);
    })
    return parseFloat(total/100).toFixed( 2 );
  }
  // add coin to coins array to start animation
  handleAdd(coin) {
    const newCoins = [];
    newCoins.push(coin);
    this.setState({coins: newCoins});
  }
  // remove coin from coins state to complete animation
  handleRemove(i) {
    const newCoins = this.state.coins.slice();
    newCoins.splice(i, 1);
    this.setState({coins: newCoins});
  }
  // when component updates check for coin to be removed
  componentDidUpdate() {
    const coinCheck = this.state.coins[0];

    if(coinCheck == 'pennies' || coinCheck == 'nickels' || coinCheck == 'dimes' || coinCheck == 'quarters'){
      this.handleRemove(0);
    }
  }

  renderData() {
    let coinData = this.state.coinData
    // if not logged in display msg
    if (!sessionStorage.token) {
      return <h1 className='text-center'>You need to login to use this</h1>
    }
    // if no coins have been saved render msg
    if (!this.state.coinData.reduce((a, b) => a + b, 0)) {
      return <h2 className='text-center'>Looks like you don't have coins saved!</h2>
    }
    // if coin data has not been recieved yet render progress bar
    if (coinData.length === 0) {
      return <ProgressBar className="loading-circle" type='circular' mode='indeterminate' />
    }
    // otherwise render pie chart
    return (
      <PieChart data={{
        labels: ['Pennies', 'Nickels', 'Dimes', 'Quarters'],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#e74c3c",
            "#ffb600"
          ],
          data: coinData
        }]
      }}  />
    )
  }

  renderStatus() {
    let coinData = this.state.coinData
    // if not logged in render msg
    if (!sessionStorage.token) {
      return <h3>Please sign up on the home page!</h3>
    }
    // if no coins have been saved render msg
    if (coinData.reduce((a, b) => a + b, 0) === 0) {
      return <h3>Start caching some coins so you can see your progress!</h3>
    }
    // if coin data has not been recieved yet render loading msg
    if (coinData.length === 0) {
      return <h3>Loading...</h3>
    }
    // otherwise show total saved & total coins
    return (
      <div>
        <CardTitle
          avatar="assets/images/bag.png"
        >
          <h3>Total Saved: &#36;{this.handleTotal()}</h3>
        </CardTitle>
        <CardTitle
          avatar="assets/images/net.png"
        >
          <h3>Cached Coins: {coinData.reduce((a, b) => a + b, 0)}</h3>
        </CardTitle>
      </div>
    )
  }

  render() {
    // map coins array for animation
    const coins = this.state.coins.map((coin, i) => (
      <div key={coin} id="coin-img" className={coin}></div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={ {
            enter: 'enter',
            enterActive: 'enterActive',
            leave: 'leave',
            leaveActive: 'leaveActive'
          } }
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {coins}
        </ReactCSSTransitionGroup>
        <div className="container">
          <br/>
          <div className="row">

            <Col md={6}>
              <Card>
                <CardText className="title">
                  <h1>Set Your Goal</h1>
                </CardText>
                <Goals total={this.handleTotal()} />
                <div className="holder">
                  {this.renderStatus()}
                </div>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <CardText className="title">
                  <h1>Breakdown of Coins</h1>
                </CardText>
                {this.renderData()}
              </Card>
            </Col>

          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">

            </div>
          </div>
        </div>
      </div>

    )
  }

}
