// DECRIPTION:
// Going back to the information security section, you may remember that storing plaintext passwords is never okay. Now it is time to implement BCrypt to solve this issue.

// bcrypt@~5.0.0 has already been added as a dependency, so require it in your server. You will need to handle hashing in 2 key areas: where you handle registering/saving a new account, and when you check to see that a password is correct on login.

// Currently on your registration route, you insert a user's plaintext password into the database like so: password: req.body.password. Hash the passwords instead by adding the following before your database logic: const hash = bcrypt.hashSync(req.body.password, 12);, and replacing the req.body.password in the database saving with just password: hash.

// On your authentication strategy, you check for the following in your code before completing the process: if (password !== user.password) return done(null, false);. After making the previous changes, now user.password is a hash. Before making a change to the existing code, notice how the statement is checking if the password is not equal then return non-authenticated. With this in mind, change that code to look as follows to properly check the password entered against the hash:

// if (!bcrypt.compareSync(password, user.password)) { 
//   return done(null, false);
// }
// That is all it takes to implement one of the most important security features when you have to store passwords.

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
const bcrypt = require('bcrypt');

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
      showLogin: true,
      showRegistration: true
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

  app.route('/register')
  .post((req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 12);
    myDataBase.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: hash
        },
          (err, doc) => {
            if (err) {
              res.redirect('/');
            } else {
              // The inserted document is held within
              // the ops property of the doc
              next(null, doc.ops[0]);
            }
          }
        )
      }
    })
  },
    passport.authenticate('local', { failureRedirect: '/' }),
    (req, res, next) => {
      res.redirect('/profile');
    }
  );
  app.use((req, res, next) => {
    res.status(404)
      .type('text')
      .send('Not Found');
  });
  
 passport.use(new LocalStrategy((username, password, done) => {
    myDataBase.findOne({ username: username }, (err, user) => {
      console.log(`User ${username} attempted to log in.`);
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!bcrypt.compareSync(password, user.password)) { 
          return done(null, false);
      }
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