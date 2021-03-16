// // GET request => http://localhost:3000/about
// app.get('/about', (req, res) => {
// 	// res.send('<h1>ALL ABOUT ME</h1>');
// 	res.sendFile(path.join(__dirname, 'html', 'about.html'));
// });
// app.get('/about/story', (req, res) => {});
// app.get('/about/info', (req, res) => {});
// app.get('/about/faq', (req, res) => {});

const express = require('express');
const router = express.Router();
const path = require('path');

// GET request => http://localhost:3000/about
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'about.html'));
});

// GET request => http://localhost:3000/about/story
router.get('/story', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'html', 'story.html'));
});

// GET request => http://localhost:3000/about/info
router.get('/info', (req, res) => {});

// GET request => http://localhost:3000/about/faq
router.get('/faq', (req, res) => {});

module.exports = router;
