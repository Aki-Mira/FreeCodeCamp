// DECRIPTION:
// Use Assert.isOK and Assert.isNotOK
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// isOk() will test for a truthy value, and isNotOk() will test for a falsy value.

// To learn more about truthy and falsy values, try our Falsy Bouncer challenge.

// Within tests/1_unit-tests.js under the test labelled #3 in the Basic Assertions suite, change each assert to either assert.isOk() or assert.isNotOk() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

//  // #3
//  test('#isOk, #isNotOk', function () {
//     assert.fail(null, 'null is falsey');
//     assert.fail("I'm truthy", 'A string is truthy');
//     assert.fail(true, 'true is truthy');
//   });

//   SOLUTION:

// #3
test('#isOk, #isNotOk', function () {
    assert.isNotOk(null, 'null is falsey');
    assert.isOk("I'm truthy", 'A string is truthy');
    assert.isOk(true, 'true is truthy');
  });
