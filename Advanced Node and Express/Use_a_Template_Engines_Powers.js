// DECRIPTION:
// One of the greatest features of using a template engine is being able to pass variables from the server to the template file before rendering it to HTML.

// In your Pug file, you're able to use a variable by referencing the variable name as #{variable_name} inline with other text on an element or by using an equal sign on the element without a space such as p=variable_name which assigns the variable's value to the p element's text.

// Pug is all about using whitespace and tabs to show nested elements and cutting down on the amount of code needed to make a beautiful site.

// Take the following Pug code for example:

// head
//   script(type='text/javascript').
//     if (foo) bar(1 + 5);
// body
//   if youAreUsingPug
//       p You are amazing
//     else
//       p Get on it!
// The above yields the following HTML:

// <head>
//   <script type="text/javascript">
//     if (foo) bar(1 + 5);
//   </script>
// </head>
// <body>
//   <p>You are amazing</p>
// </body>
// Your index.pug file included in your project, uses the variables title and message.

// Pass those from your server to the Pug file by adding an object as a second argument to your res.render call with the variables and their values. Give the title a value of Hello and message a value of Please log in.

// It should look like:

// res.render('index', { title: 'Hello', message: 'Please log in' });
// Now refresh your page, and you should see those values rendered in your view in the correct spot as laid out in your index.pug file!

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
res.render('index', { title: 'Hello', message: 'Please log in' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
