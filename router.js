/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

// Controllers
var isLoggedIn = require('./controllers/isLoggedIn');
var signup = require('./controllers/signup');
var login = require('./controllers/login');

// =====================================
// HOME PAGE (with login links) ========
// =====================================
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

// =====================================
// LOGIN PAGE ==========================
// =====================================
router.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'login.html'));
});

// =====================================
// LOGIN ===============================
// =====================================
// process the login form
router.post('/login', login);

// =====================================
// SIGNUP ==============================
// =====================================
// process the signup form
router.post('/signup', signup);

// =====================================
// SUCCESS =============================
// =====================================
// process the signup form
router.get('/success', isLoggedIn, function(req, res) {
	res.sendFile(path.join(__dirname, 'success.html'))
});

// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

module.exports = router;