// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Within tests/2_functional-tests.js, in the 'Submit the surname "Vespucci" in the HTML form' test (// #6), automate the following:

// Fill in the form with the surname Vespucci
// Press the submit button
// And within the pressButton callback:

// Assert that status is OK 200
// Assert that the text inside the element span#name is 'Amerigo'
// Assert that the text inside the element span#surname is 'Vespucci'
// Assert that the element(s) span#dates exist and their count is 1
// Do not forget to remove the assert.fail() call.

// SOLUTION:
// #6
test('Submit the surname "Vespucci" in the HTML form', function (done) {
    browser.fill('surname', 'Vespucci').then(() => {
      browser.pressButton('submit', () => {
        browser.assert.success();
        browser.assert.text('span#name', 'Amerigo');
        browser.assert.text('span#surname', 'Vespucci');
        browser.assert.elements('span#dates', 1);
    done();
  });
});
});