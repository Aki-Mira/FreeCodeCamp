// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit or cloned from GitHub.

// deepEqual() asserts that two objects are deep equal.

// Within tests/1_unit-tests.js under the test labelled #7 in the Equality suite, change each assert to either assert.deepEqual or assert.notDeepEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #7
test('#deepEqual, #notDeepEqual', function () {
    assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
    assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
  });