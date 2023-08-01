// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// property asserts that the actual object has a given property.

// Within tests/1_unit-tests.js under the test labelled #16 in the Objects suite, change each assert to either assert.property or assert.notProperty to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
// #16
test('#property, #notProperty', function () {
    assert.notProperty(myCar, 'wings', "Cars don't have wings");
    assert.property(airlinePlane, 'engines', 'Planes have engines');
    assert.property(myCar, 'wheels', 'Cars have wheels');
  });