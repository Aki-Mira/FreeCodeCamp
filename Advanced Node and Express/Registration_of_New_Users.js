// DECRIPTION:
// Now you need to allow a new user on your site to register an account. In the res.render for the home page add a new variable to the object passed along - showRegistration: true. When you refresh your page, you should then see the registration form that was already created in your index.pug file. This form is set up to POST on /register, so create that route and have it add the user object to the database by following the logic below.

// The logic of the registration route should be as follows:

// Register the new user
// Authenticate the new user
// Redirect to /profile
// The logic of step 1 should be as follows:

// Query database with findOne
// If there is an error, call next with the error
// If a user is returned, redirect back to home
// If a user is not found and no errors occur, then insertOne into the database with the username and password. As long as no errors occur there, call next to go to step 2, authenticating the new user, which you already wrote the logic for in your POST /login route.
// app.route('/register')
//   .post((req, res, next) => {
//     myDataBase.findOne({ username: req.body.username }, (err, user) => {
//       if (err) {
//         next(err);
//       } else if (user) {
//         res.redirect('/');
//       } else {
//         myDataBase.insertOne({
//           username: req.body.username,
//           password: req.body.password
//         },
//           (err, doc) => {
//             if (err) {
//               res.redirect('/');
//             } else {
//               // The inserted document is held within
//               // the ops property of the doc
//               next(null, doc.ops[0]);
//             }
//           }
//         )
//       }
//     })
//   },
//     passport.authenticate('local', { failureRedirect: '/' }),
//     (req, res, next) => {
//       res.redirect('/profile');
//     }
//   );
// Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point.

// NOTE: From this point onwards, issues can arise relating to the use of the picture-in-picture browser. If you are using an online IDE which offers a preview of the app within the editor, it is recommended to open this preview in a new tab.
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
    myDataBase.findOne({ username: req.body.username }, (err, user) => {
      if (err) {
        next(err);
      } else if (user) {
        res.redirect('/');
      } else {
        myDataBase.insertOne({
          username: req.body.username,
          password: req.body.password
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