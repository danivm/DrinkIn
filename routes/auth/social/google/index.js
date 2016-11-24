const express = require('express');

const passport = require('../passport.js')
const User = require('../../../../models/user')
const router = express.Router();

const successRedirect = '/';
const scope = [ 'email', 'profile' ];
const failureRedirect = '/';

router.get( '/', passport.authenticate('google', { successRedirect, scope }) );

router.get( '/callback',
	passport.authenticate('google', { failureRedirect }), // middleware
	(req, res) => {
		res.redirect('/admin/dishes') // handler
	}
);

module.exports = router;