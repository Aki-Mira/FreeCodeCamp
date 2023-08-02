// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #2 in the Basic Assertions suite, change each assert to either assert.isDefined() or assert.isUndefined() to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.
// // #2
// test('#isDefined, #isUndefined', function () {
//     assert.fail(null, 'null is not undefined');
//     assert.fail(undefined, 'undefined IS undefined');
//     assert.fail('hello', 'A string is not undefined');
//   });

//   SOLUTION:
  // #2
  test('#isDefined, #isUndefined', function () {
    assert.isDefined(null, 'null is not undefined');
    assert.isUndefined(undefined, 'undefined IS undefined');
    assert.isDefined('hello', 'A string is not undefined');
  });