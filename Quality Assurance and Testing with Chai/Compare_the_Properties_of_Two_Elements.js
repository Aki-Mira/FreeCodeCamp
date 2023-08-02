// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Within tests/1_unit-tests.js under the test labelled #8 in the Comparisons suite, change each assert to either assert.isAbove or assert.isAtMost to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
suite('Comparisons', function () {
    // #8
    test('#isAbove, #isAtMost', function () {
      assert.isAtMost('hello'.length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    });