// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// .approximately(actual, expected, delta, [message])
// Asserts that the actual is equal to expected, to within a +/- delta range.

// Within tests/1_unit-tests.js under the test labelled #10 in the Comparisons suite, change each assert to assert.approximately to make the test pass (should evaluate to true).

// Choose the minimum range (3rd parameter) to make the test always pass. It should be less than 1.

// SOLUTION:
 // #10
 test('#approximately', function () {
    assert.approximately(weirdNumbers(0.5), 1, 0.5);
    assert.approximately(weirdNumbers(0.2), 1, 0.8);
  });