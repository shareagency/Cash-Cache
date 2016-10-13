var passport = require('passport');

module.exports = function(req, res, next) {
	// If not authenticate
	passport.authenticate('local-login', function(err, user, info) {
		if (err) return res.json(err);
		if (!user) return res.json(err);
		req.logIn(user, function(err) {
			if (err) return res.json(err);
			return res.json({
				redirect: '/',
				message: 'success'
			});
		});
	}) (req, res, next)
}, function(req, res, next) {
	console.log('req.user.id: ', req.user.id);
  var token = utils.generateToken(64);
  Token.save(token, { userId: req.user.id }, function(err) {
    if (err) { return done(err); }
    res.cookie('cash_cache', token, { path: '/', httpOnly: true, maxAge: 86400000 }); // 1 day
    return next();
  });
}, function(req, res) {
  res.redirect('/');
}
