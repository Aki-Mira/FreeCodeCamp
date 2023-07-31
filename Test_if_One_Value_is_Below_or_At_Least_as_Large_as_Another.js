// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Within tests/1_unit-tests.js under the test labelled #9 in the Comparisons suite, change each assert to either assert.isBelow or assert.isAtLeast to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #9
test('#isBelow, #isAtLeast', function () {
    assert.isAtLeast('world'.length, 5);
    assert.isAtLeast(2 * Math.random(), 0);
    assert.isBelow(5 % 2, 2);
    assert.isBelow(2 / 3, 1);
  });