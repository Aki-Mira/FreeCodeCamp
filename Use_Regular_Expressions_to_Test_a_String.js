// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// match() asserts that the actual value matches the second argument regular expression.

// Within tests/1_unit-tests.js under the test labelled #15 in the Strings suite, change each assert to either assert.match or assert.notMatch to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #15
test('#match, #notMatch', function () {
    const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
    assert.match(formatPeople('John Doe', 35), regex);
    assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
  });