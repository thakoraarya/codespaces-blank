const router = require('express').Router();
const passport = require('../auth');

router.get('/login', passport.authenticate('auth0', { scope: 'openid email profile' }));

router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/failure' }), (req, res) => {
  res.status(200).json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
