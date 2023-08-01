// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// #instanceOf asserts that an object is an instance of a constructor.

// Within tests/1_unit-tests.js under the test labelled #18 in the Objects suite, change each assert to either assert.instanceOf or assert.notInstanceOf to make the test pass (should evaluate to true). Do not alter the arguments passed to the asserts.

// SOLUTION:
    // #18
    test('#instanceOf, #notInstanceOf', function () {
        assert.notInstanceOf(myCar, Plane);
        assert.instanceOf(airlinePlane, Plane);
        assert.instanceOf(airlinePlane, Object);
        assert.notInstanceOf(myCar.wheels, String);
      });