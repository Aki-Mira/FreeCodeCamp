// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// include() and notInclude() work for strings too! include() asserts that the actual string contains the expected substring.

// Within tests/1_unit-tests.js under the test labelled #14 in the Strings suite, change each assert to either assert.include or assert.notInclude to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #14
test('String #include, #notInclude', function () {
    assert.include('Arrow', 'row', "'Arrow' contains 'row'");
    assert.notInclude('dart', 'queue', "But 'dart' doesn't contain 'queue'");
  });