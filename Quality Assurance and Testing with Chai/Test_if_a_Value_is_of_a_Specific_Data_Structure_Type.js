// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// #typeOf asserts that value's type is the given string, as determined by Object.prototype.toString.

// Within tests/1_unit-tests.js under the test labelled #17 in the Objects suite, change each assert to either assert.typeOf or assert.notTypeOf to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #17
test('#typeOf, #notTypeOf', function () {
    assert.typeOf(myCar, 'object');
    assert.typeOf(myCar.model, 'string');
    assert.notTypeOf(airlinePlane.wings, 'string');
    assert.typeOf(airlinePlane.engines, 'array');
    assert.typeOf(myCar.wheels, 'number');
  });