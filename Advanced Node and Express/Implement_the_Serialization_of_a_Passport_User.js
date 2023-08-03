// DECRIPTION:
// You are not loading an actual user object since the database is not set up. Connect to the database once, when you start the server, and keep a persistent connection for the full life-cycle of the app. To do this, add your database's connection string (for example: mongodb+srv://<username>:<password>@cluster0-jvwxi.mongodb.net/?retryWrites=true&w=majority) to the environment variable MONGO_URI. This is used in the connection.js file.

// If you are having issues setting up a free database on MongoDB Atlas, check out this tutorial.

// Now you want to connect to your database, then start listening for requests. The purpose of this is to not allow requests before your database is connected or if there is a database error. To accomplish this, encompass your serialization and app routes in the following code:

// myDB(async client => {
//   const myDataBase = await client.db('database').collection('users');

//   // Be sure to change the title
//   app.route('/').get((req, res) => {
//     // Change the response to render the Pug template
//     res.render('index', {
//       title: 'Connected to Database',
//       message: 'Please login'
//     });
//   });

//   // Serialization and deserialization here...

//   // Be sure to add this...
// }).catch(e => {
//   app.route('/').get((req, res) => {
//     res.render('index', { title: e, message: 'Unable to connect to database' });
//   });
// });
// // app.listen out here...
// Be sure to uncomment the myDataBase code in deserializeUser, and edit your done(null, null) to include the doc.

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