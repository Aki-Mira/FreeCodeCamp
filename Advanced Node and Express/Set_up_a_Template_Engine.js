// DECRIPTION:
// Working on these challenges will involve you writing your code using one of the following methods:

// Clone this GitHub repo and complete these challenges locally.
// Use our Replit starter project to complete these challenges.
// Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.
// If you use Replit, follow these steps to set up the project:

// Start by importing the project on Replit.
// Next, you will see a .replit window.
// Select Use run command and click the Done button.
// When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field.

// A template engine enables you to use static template files (such as those written in Pug) in your app. At runtime, the template engine replaces variables in a template file with actual values which can be supplied by your server. Then it transforms the template into a static HTML file that is sent to the client. This approach makes it easier to design an HTML page and allows for displaying variables on the page without needing to make an API call from the client.

// pug@~3.0.0 has already been installed, and is listed as a dependency in your package.json file.

// Express needs to know which template engine you are using. Use the set method to assign pug as the view engine property's value:

// app.set('view engine', 'pug');
// After that, add another set method that sets the views property of your app to point to the ./views/pug directory. This tells Express to render all views relative to that directory.

// Finally, use res.render() in the route for your home page, passing index as the first argument. This will render the pug template.

// If all went as planned, your app home page will no longer be blank. Instead, it will display a message indicating you've successfully rendered the Pug template!

// Submit your page when you think you've got it right. If you're running into errors, you can check out the project completed up to this point.

// SOLUTION:
'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();
app.set('view engine', 'pug');
app.set('views', './views/pug');
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
