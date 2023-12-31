// DECRIPTION:
// Serialization and deserialization are important concepts in regards to authentication. To serialize an object means to convert its contents into a small key that can then be deserialized into the original object. This is what allows us to know who has communicated with the server without having to send the authentication data, like the username and password, at each request for a new page.

// To set this up properly, you need to have a serialize function and a deserialize function. In Passport, these can be created with:

// passport.serializeUser(cb);
// passport.deserializeUser(cb);
// The callback function passed to serializeUser is called with two arguments: the full user object, and a callback used by passport.

// The callback expects two arguments: An error, if any, and a unique key to identify the user that should be returned in the callback. You will use the user's _id in the object. This is guaranteed to be unique, as it is generated by MongoDB.

// Similarly, deserializeUser is called with two arguments: the unique key, and a callback function.

// This callback expects two arguments: An error, if any, and the full user object. To get the full user object, make a query search for a Mongo _id, as shown below:

// passport.serializeUser((user, done) => {
//   done(null, user._id);
// });

// passport.deserializeUser((id, done) => {
//   myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
//     done(null, null);
//   });
// });
// Add the two functions above to your server. The ObjectID class comes from the mongodb package. mongodb@~3.6.0 has already been added as a dependency. Declare this class with:

// const { ObjectID } = require('mongodb');
// The deserializeUser will throw an error until you set up the database connection. So, for now, comment out the myDatabase.findOne call, and just call done(null, null) in the deserializeUser callback function.

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

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  // myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
  // });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
