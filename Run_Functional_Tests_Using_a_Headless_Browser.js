// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// On the page there's an input form. It sends data to the PUT /travellers endpoint as an AJAX request.

// When the request successfully completes, the client code appends a <div> containing the information in the response to the DOM.

// Here's an example of how to use Zombie.js to interact with the form:

// test('Submit the surname "Polo" in the HTML form', function (done) {
//   browser.fill('surname', 'Polo').then(() => {
//     browser.pressButton('submit', () => {
//       browser.assert.success();
//       browser.assert.text('span#name', 'Marco');
//       browser.assert.text('span#surname', 'Polo');
//       browser.assert.elements('span#dates', 1);
//       done();
//     });
//   });
// });
// First, the fill method of the browser object fills the surname field of the form with the value 'Polo'. fill returns a promise, so then is chained off of it.

// Within the then callback, the pressButton method of the browser object is used to invoke the form's submit event listener. The pressButton method is asynchronous.

// Then, once a response is received from the AJAX request, a few assertions are made confirming:

// The status of the response is 200
// The text within the <span id='name'></span> element matches 'Marco'
// The text within the <span id='surname'></span> element matches 'Polo'
// There is 1 <span id='dates'></span> element.
// Finally, the done callback is invoked, which is needed due to the asynchronous test.

// Within tests/2_functional-tests.js, in the 'Submit the surname "Colombo" in the HTML form' test (// #5), automate the following:

// Fill in the form with the surname Colombo
// Press the submit button
// And within the pressButton callback:

// Assert that status is OK 200
// Assert that the text inside the element span#name is 'Cristoforo'
// Assert that the text inside the element span#surname is 'Colombo'
// Assert that the element(s) span#dates exist and their count is 1
// Do not forget to remove the assert.fail() call.

// SOLUTION:
suite('"Famous Italian Explorers" form', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      browser.fill('surname', 'Colombo').then(() => {
        browser.pressButton('submit', () => {
          browser.assert.success();
          browser.assert.text('span#name', 'Cristoforo');
          browser.assert.text('span#surname', 'Colombo');
          browser.assert.elements('span#dates', 1);
      done();
    });
  });
 });