import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Tools from './components/Tools';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/tools" component={Tools} />
    </Route>
  </Router>
), document.getElementById('app'))
