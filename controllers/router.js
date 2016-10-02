/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var models  = require('../models');

// Controllers
var isLoggedIn = require('./isLoggedIn');
var signup = require('./signup');
var login = require('./login');

// Wrap router in function call so io can be used
module.exports = function() {
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	router.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, 'index.html'))
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
	router.get('/success', function(req, res) {
		res.sendFile(path.join(__dirname, 'success.html'))
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// Return router for exporting with io
	return router
}