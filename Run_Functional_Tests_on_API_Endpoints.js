// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Within tests/2_functional-tests.js, alter the 'Test GET /hello with your name' test (// #2) to assert the status and the text of the response to make the test pass.

// Send your name as a URL query by appending ?name=<your_name> to the route. The endpoint responds with 'hello <your_name>'.


// SOLUTION:
test('Test GET /hello with your name', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/hello?name=Nadia')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'hello Nadia');
        done();
      });
  });