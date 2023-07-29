// DECRIPTION:
// Within tests/1_unit-tests.js under the test labelled #1 in the Basic Assertions suite, change each assert to either assert.isNull or assert.isNotNull to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.
// test('#isNull, #isNotNull', function () {
//     assert.fail(null, 'This is an optional error description - e.g. null is null');
//     assert.fail(1, '1 is not null');
//   });

// SOLUTION:
 // #1
 test('#isNull, #isNotNull', function () {
    assert.isNull(null, 'This is an optional error description - e.g. null is null');
    assert.isNotNull(1, '1 is not null');
  });