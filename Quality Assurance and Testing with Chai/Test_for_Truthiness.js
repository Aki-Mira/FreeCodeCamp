// DECRIPTION:
// Test for Truthiness
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// isTrue() will test for the boolean value true and isNotTrue() will pass when given anything but the boolean value of true.

// assert.isTrue(true, 'This will pass with the boolean value true');
// assert.isTrue('true', 'This will NOT pass with the string value "true"');
// assert.isTrue(1, 'This will NOT pass with the number value 1');
// isFalse() and isNotFalse() also exist, and behave similarly to their true counterparts except they look for the boolean value of false.

// Within tests/1_unit-tests.js under the test labelled #4 in the Basic Assertions suite, change each assert to either assert.isTrue or assert.isNotTrue to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// #4
// test('#isTrue, #isNotTrue', function () {
//     assert.fail(true, 'true is true');
//     assert.fail(!!'double negation', 'Double negation of a truthy value is true');
//     assert.fail({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
//   });

// SOLUTION:
// #4
test('#isTrue, #isNotTrue', function () {
    assert.isTrue(true, 'true is true');
    assert.isTrue(!!'double negation', 'Double negation of a truthy value is true');
    assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
  });