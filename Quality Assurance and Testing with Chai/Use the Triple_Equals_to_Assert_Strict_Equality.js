// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// strictEqual() compares objects using ===.

// Within tests/1_unit-tests.js under the test labelled #6 in the Equality suite, change each assert to either assert.strictEqual or assert.notStrictEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #6
test('#strictEqual, #notStrictEqual', function () {
    assert.notStrictEqual(6, '6');
    assert.strictEqual(6, 3 * 2);
    assert.strictEqual(6 * '2', 12);
    assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
  });