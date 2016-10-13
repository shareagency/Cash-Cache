import React, { Component } from 'react';
import {Pie as PieChart} from 'react-chartjs-2';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import '../theme/Tools.scss';
import io from 'socket.io-client';
import requests from './utils/helpers/requests';
import Goals from './Goals';

export default class Tools extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coinData: [], username: ''
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
      return <h1>Please sign up on the home page!</h1>
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
      <div className='box-total'>
        <h3>Total Saved: &#36;{this.handleTotal()}</h3>
        <h3>Cached Coins: {coinData.reduce((a, b) => a + b, 0)}</h3>
      </div>
    )
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Goals />
            {this.renderData()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            {this.renderStatus()}
          </div>
        </div>
      </div>
    )
  }

}
