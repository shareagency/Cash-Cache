// Dependencies
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

// Initialize Express app
var express = require('express');
var app = express();

// Require mongoose and passport
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var passport = require('passport');
require('../config/passport')(passport); // pass passport for configuration

// Set up middleware
// app.use(favicon(__dirname + '/public/favicon.ico')); // uncomment after placing your favicon in /public
app.use(logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // body parser for reading body requests
	extended: false
}));

// Set up passport middleware
app.use(session({
	secret: require('../config/secret'), // session secret
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(passport.authenticate('remember-me'));

// Webpack middleware
if (process.env.NODE_ENV === 'production') {
  var compression = require('compression');
  app.use(compression());
} else {
  var config = require('../webpack.config.dev');
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));
}

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/dist'));

// Database configuration
var uristring = process.env.MONGODB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/cashcache';
mongoose.connect(uristring, function(err) {
  if (err)
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  else
    console.log ('Succeeded connected to: ' + uristring);
});

// Routing
app.use('/', require('./router'));

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// (no stacktraces leaked to user unless in development environment)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

module.exports = app;
