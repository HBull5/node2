const { ifError } = require('assert');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
	res.end('<a href="/auth/login">login</a>');
});

// /auth/login
router.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'login.html'));
});

router.post('/login', (req, res) => {
	const correctUser = 'user123';
	const correctPass = 'password';
	const { username, password } = req.body;

	if (username === correctUser && password === correctPass) {
		res.redirect('/dashboard');
	}
});

// /auth/register
router.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'register.html'));
});

router.post('/register', (req, res) => {
	// we get these by the value of the name field
	// username, password, email, gender, & age

	// const username = req.body.username;
	// const password = req.body.password;
	// const email = req.body.email;
	// const gender = req.body.gender;
	// const age = req.body.age;

	// better way
	const { username, password, email, gender, age } = req.body;

	/**
	 * BASIC WAY TO HANDLE VALIDATION
	 */
	const errors = [];

	if (username.length === 0) {
		errors.push({ field: 'username', msg: 'Username field cannot be blank' });
	} else if (username.length > 20) {
		errors.push({ field: 'username', msg: 'Username field must be less than 21 characters' });
	}

	if (password.length === 0) {
		errors.push({ field: 'password', msg: 'Password field cannot be blank' });
	} else if (password.length < 6) {
		errors.push({ field: 'password', msg: 'Password length must be 6 characters or greater' });
	} else if (password.length >= 20) {
		errors.push({ field: 'password', msg: 'Password length but be 20 or less characters' });
	} else if (/[!@#$%\^&*-+]/.test(password)) {
		errors.push({ field: 'password', msg: 'Password must include at least one special character (!@#$%^&*-+)' });
	}

	if (email.length === 0) {
		errors.push({ field: 'email', msg: 'Email field cannot be blank' });
	}

	if (gender.length === 0) {
		errors.push({ field: 'gender', msg: 'Gender field cannot be blank' });
	}

	if (age.length === 0) {
		errors.push({ field: 'age', msg: 'Age field cannot be blank' });
	}

	if (errors.length > 0) {
		// don't submit the form b/c theres errors, so return the register to them and have them try again
	} else {
		// write all data to the database
	}

	res.end();
});

module.exports = router;
