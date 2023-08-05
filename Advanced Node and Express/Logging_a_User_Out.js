// DECRIPTION:
// Creating the logout logic is easy. The route should just unauthenticate the user, and redirect to the home page instead of rendering any view.

// In passport, unauthenticating a user is as easy as just calling req.logout() before redirecting. Add this /logout route to do that:

// app.route('/logout')
//   .get((req, res) => {
//     req.logout();
//     res.redirect('/');
// });
// You may have noticed that you are not handling missing pages (404). The common way to handle this in Node is with the following middleware. Go ahead and add this in after all your other routes:

// app.use((req, res, next) => {
//   res.status(404)
//     .type('text')
//     .send('Not Found');
// });
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
      message: 'Please log in',
      showLogin: true
    });
  });

  app.route('/login').post(passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
  })

  app
 .route('/profile')
 .get(ensureAuthenticated, (req,res) => {
    res.render('profile', { username: req.user.username });
 });

  app.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
});

  app.use((req, res, next) => {
  res.status(404)
    .type('text')
    .send('Not Found');
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

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});