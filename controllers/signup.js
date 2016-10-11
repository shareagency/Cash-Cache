var passport = require('passport');

module.exports = function(req, res, next) {
	passport.authenticate('local-signup', function(err, user, info) {
		console.log('INFO: ', info)
		if (err) return res.json(err);
		req.logIn(user, function(err) {
			if (err) return res.json({err: err, message: 'error loggin in'});
			return res.json({
				redirect: '/login',
				'message': 'success'
			});
		});
	}) (req, res, next)
}
