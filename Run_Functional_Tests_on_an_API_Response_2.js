// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// This exercise is similar to the previous one.

// Now that you know how to test a PUT request, it's your turn to do it from scratch.

// Within tests/2_functional-tests.js, alter the 'Send {surname: "da Verrazzano"}' test (// #4) and use the put and send methods to test the '/travellers' endpoint.

// Send the following JSON object with your PUT request:

// {
//   "surname": "da Verrazzano"
// }
// Check for the following within the request.end callback:

// The status should be 200
// The type should be application/json
// The body.name should be Giovanni
// The body.surname should be da Verrazzano
// Follow the assertion order above - we rely on it. Also, be sure to remove assert.fail() once complete.

// SOLUTION:
// #4
test('send {surname: "da Verrazzano"}', function (done) {
    chai
      .request(server)
      .keepOpen()
      .put('/travellers')
      .send({surname : 'da Verrazzano'})
      .end(function (err, res) {
        assert.equal(res.status, 200);
         assert.equal(res.type, 'application/json', 'Response should be json');
    assert.equal(
      res.body.name,
      'Giovanni',
      'res.body.name should be "Giovanni"'
    );
    assert.equal(
      res.body.surname,
      'da Verrazzano',
      'res.body.surname should be "da Verrazzano"'
    );
        done();
      });
  });