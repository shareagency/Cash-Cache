# Cash Cache
Final group project for Rutgers Coding Bootcamp.

[LIVE PREVIEW](http://cash-cache.herokuapp.com/)

![coin animation](https://github.com/mattbajorek/Cash-Cache/raw/master/doc_assets/merged-animation-1.gif)

For coin accepter & raspberry pi information, see our [raspberry pi server docs](https://github.com/jefabrah/cash-cache-rpiserver)

## Screenshots

## Technologies used
- **M**ongoDB
- **E**xpress
- **R**eact
- **N**ode.JS
    - Axios
    - Babel
    - Bluebird
    - Passport
    - Webpack
- Bootstrap
- ChartJS
- SocketIO
- SASS
- React Toolbox

### Prerequisities
- Node.JS - visit nodejs.org and download...
- Mongodb: brew install mongodb (Mac) or visit mongodb.com for MSI (Windows)

## Getting Started
When you download the repo, run the following command to get all the dependencies

```
npm i
```
To Start the Server:

```
npm run start
```

## Built With
* Webpack
* Node Package Manager

## Deployed With
* Heroku
* mLab

## Walk throughs of code
Here is a section of code that listens to raspberry pi signal inputs and sends a post request to the server.

```
// coinInput is attaced to pin 17
const requests = require('./requests'),
      GPIO = require('onoff').Gpio,
      coinInput = new GPIO(17, 'in', 'rising');
let   pulseCount = 0,
      pulsing = false;

// callback function for coinInput
function handlePulse (err, state) {

  if (err) {
    console.log('err: ', err);
    return;
  }
  // if state doesn't equal 1 return
  if (state !== 1) return;
  // increment pulse count
  pulseCount++;
  // if pulsing started return
  if (pulsing) return;
  pulsing = true;
  // otherwise set timeout to clear count
  setTimeout(function () {
    requests.postCoinInput(pulseCount);
    pulseCount = 0;
    pulsing = false;
  }, 600)
}

// set the coinInput callback function to handlePulse
coinInput.watch(handlePulse);
```
Here is a section of code that uses React CSS Transition group to animate coins going into piggy bank.
```
// NavbarBackground component
  handleAdd(event) {
    const coinVal = event.target.id;
    const newCoins = [];
    newCoins.push(coinVal);    
    this.setState({coins: newCoins});
  }

  handleRemove(i) {
    const newCoins = this.state.coins.slice();
    newCoins.splice(i, 1);
    this.setState({coins: newCoins});
  }

  componentDidUpdate() {
    const coinCheck = this.state.coins[0];

    if(coinCheck == 'penny' || coinCheck == 'nickel' || coinCheck == 'dime' || coinCheck == 'quarter'){
      this.handleRemove(0);
    }  
  }

  render() {
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
...
```
Here is a section of code that uses session storage to see if the user is logged in or not.
```
loggedIn: function() {
    return !!((typeof window !== "undefined") ? sessionStorage.token : undefined)
},
```

## Authors
* [Adam Mattas](https://github.com/adamfader)
* [Jeff Abraham](https://github.com/jefabrah)
* [Matthew Bajorek](https://github.com/mattbajorek)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Hat tip to anyone who's code was used
* All those times in where you wondered home much money was actually in your piggy bank
