// DECRIPTION:
// A strategy is a way of authenticating a user. You can use a strategy for allowing users to authenticate based on locally saved information (if you have them register first) or from a variety of providers such as Google or GitHub. For this project, we will use Passport middleware. Passport provides a comprehensive set of strategies that support authentication using a username and password, GitHub, Google, and more.

// passport-local@~1.0.0 has already been added as a dependency. Add it to your server as follows:

// const LocalStrategy = require('passport-local');
// Tell passport to use an instantiated LocalStrategy object with a few settings defined. Make sure this (as well as everything from this point on) is encapsulated in the database connection since it relies on it!:

// passport.use(new LocalStrategy((username, password, done) => {
//   myDataBase.findOne({ username: username }, (err, user) => {
//     console.log(`User ${username} attempted to log in.`);
//     if (err) return done(err);
//     if (!user) return done(null, false);
//     if (password !== user.password) return done(null, false);
//     return done(null, user);
//   });
// }));
// This is defining the process to use when you try to authenticate someone locally. First, it tries to find a user in your database with the username entered. Then, it checks for the password to match. Finally, if no errors have popped up that you checked for (e.g. an incorrect password), the user object is returned and they are authenticated.

// Many strategies are set up using different settings. Generally, it is easy to set it up based on the README in that strategy's repository. A good example of this is the GitHub strategy where you don't need to worry about a username or password because the user will be sent to GitHub's auth page to authenticate. As long as they are logged in and agree then GitHub returns their profile for you to use.

// In the next step, you will set up how to actually call the authentication strategy to validate a user based on form data.

// Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point.

// SOLUTION:
'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');
const session = require('express-session');
const passport = require('passport');
const { ObjectID } = require('mongodb');
const LocalStrategy = require('passport-local');

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

fccTesting(app); // For fCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

myDB(async client => {
  const myDataBase = await client.db('database').collection('users');

  app.route('/').get((req, res) => {
    res.render('index', {
      title: 'Connected to Database',
      message: 'Please log in'
    });
  });
  
  passport.use(new LocalStrategy((username, passport, done) => {
    myDataBase.findOne({ username: username }, (err, user) => {
      console.log(`User ${username} attempted to log in.`);
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }));


  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
      done(null, doc);
    });
  });

}).catch(e => {
  app.route('/').get((req, res) => {
    res.render('index', { title: e, message: 'Unable to connect to database' });
  });
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});