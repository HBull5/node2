// initializing express
const express = require('express');
const app = express();
const path = require('path');

// CRUD
// GET (READ), POST (WRITE), PUT (UPDATES), DELETE (DUH)

app.use(express.urlencoded({ extended: true }));

// DEFINING MIDDLEWARE FUNCTION
// middleware functions (can be named anything just using middleware for simplicities sake) are called/executed for every request made @params req, res, next (ALL OF THESE ARE REQUIRED) next must be called at the end of the middleware
function middleware(req, res, next) {
	console.log(req.url);
	next(); // this will always look like this
}

function middleware2(req, res, next) {
	console.log('Middleware 2.0 fired');
	next();
}

// INITIALIZE MIDDLEWARE, I.E. use the middleware for every response
app.use(middleware);
// app.use(middleware2);

// @params <string> path, <function> cb(req, res)
// GET request => http://localhost:3000
app.get('/', (req, res) => {
	// res.end('<h1>Homepage</h1>');
	res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// any request that starts w/ "/about" redirect to the about.js file
app.use('/about', require('./routes/about'));

// GET request => http://localhost:3000/contact
app.get('/contact', (req, res) => {
	// how are we going to send them the contact.html page?
	res.sendFile(path.join(__dirname, 'html', 'contact.html'));
});

app.use('/auth', require('./routes/auth'));

// handler for all front facing assets
app.get('/public/*', (req, res) => {
	res.sendFile(path.join(__dirname, req.url));
});

// 404 at the end
app.get('*', (req, res) => {
	res.end('<h1>404 Not Found');
});

// routing
// starting server up and listening on a PORT
app.listen(3000, () => {
	console.log(`http://localhost:3000`);
});
