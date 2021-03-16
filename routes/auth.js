const express = require('express');
const router = express.Router();
const path = require('path');

// /auth/login
router.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'login.html'));
});

router.post('/login', (req, res) => {
	console.log(req.body.username);
	console.log(req.body.password);
	res.end();
});

// /auth/register
router.get('/register', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'register.html'));
});

module.exports = router;
