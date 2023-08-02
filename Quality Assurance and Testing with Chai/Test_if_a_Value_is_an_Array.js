// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Within tests/1_unit-tests.js under the test labelled #11 in the Arrays suite, change each assert to either assert.isArray or assert.isNotArray to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
 // #11
 test('#isArray, #isNotArray', function () {
    assert.isArray('isThisAnArray?'.split(''), 'String.prototype.split() returns an array');
    assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number');
  });
