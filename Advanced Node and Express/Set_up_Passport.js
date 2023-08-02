// DECRIPTION:
// It's time to set up Passport so you can finally start allowing a user to register or log in to an account. In addition to Passport, you will use Express-session to handle sessions. Express-session has a ton of advanced features you can use, but for now you are just going to use the basics. Using this middleware saves the session id as a cookie in the client, and allows us to access the session data using that id on the server. This way, you keep personal account information out of the cookie used by the client to tell to your server clients are authenticated and keep the key to access the data stored on the server.

// passport@~0.4.1 and express-session@~1.17.1 are already installed, and are both listed as dependencies in your package.json file.

// You will need to set up the session settings and initialize Passport. First, create the variables session and passport to require express-session and passport respectively.

// Then, set up your Express app to use the session by defining the following options:

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));
// Be sure to add SESSION_SECRET to your .env file, and give it a random value. This is used to compute the hash used to encrypt your cookie!

// After you do all that, tell your express app to use passport.initialize() and passport.session().

// Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point.
// SOLUTION:
'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session = require('express-session');
const passport = require('passport');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views/pug');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
res.render('index', { title: 'Hello', message: 'Please log in' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

// NOTE! Recently, Replit have adjusted their editor to no longer allow .env files to be created. As such, in order to use environment variables, a new tab in the left pane has been added which looks like a lock lock [image] To add an environment variable, place the variable name in the key input, and the value in the value input.