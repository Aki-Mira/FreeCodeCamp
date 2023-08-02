// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// equal() compares objects using ==.

// Within tests/1_unit-tests.js under the test labelled #5 in the Equality suite, change each assert to either assert.equal or assert.notEqual to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

suite('Equality', function () {
    // #5
    test('#equal, #notEqual', function () {
      assert.equal(12, '12', 'Numbers are coerced into strings with ==');
      assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
      assert.equal(6 * '2', '12');
      assert.notEqual(6 + '2', '12');
    });