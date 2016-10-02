// Dependencies
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');

// Initialize Express app
var express = require('express');
var app = express();

// Require mongoose and mongodb objectid
var mongoose = require('mongoose');

// Database configuration
mongoose.connect('mongodb://localhost/cashcache');
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function(err) {
  console.log('Database Error:', err);
});

// Config Passport
require('./config/passport')(passport); // pass passport for configuration

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// Set up middleware
// app.use(favicon(__dirname + '/public/favicon.ico')); // uncomment after placing your favicon in /public
app.use(logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ // body parser for reading body requests
	extended: false
}));

// Required for passport
app.use(session({
	secret: require('./config/secret'), // session secret
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(passport.authenticate('remember-me'));

// Routing
var routes = require('./controllers/router');
app.use('/', routes);

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

module.exports.app = app;
module.exports.server = server;