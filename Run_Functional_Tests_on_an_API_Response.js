// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// When you test a PUT request, you'll often send data along with it. The data you include with your PUT request is called the body of the request.

// To send a PUT request and a JSON object to the '/travellers' endpoint, you can use chai-http plugin's put and send methods:

// chai
//   .request(server)
//   .keepOpen()
//   .put('/travellers')
//   .send({
//     "surname": [last name of a traveller of the past]
//   })
//   ...
// And the route responds with:

// {
//   "name": [first name],
//   "surname": [last name],
//   "dates": [birth - death years]
// }
// See the server code for the different responses to the '/travellers' endpoint.

// Within tests/2_functional-tests.js, alter the 'Send {surname: "Colombo"}' test (// #3) and use the put and send methods to test the '/travellers' endpoint.

// Send the following JSON object with your PUT request:

// {
//   "surname": "Colombo"
// }
// Check for the following within the request.end callback:

// The status should be 200
// The type should be application/json
// The body.name should be Cristoforo
// The body.surname should be Colombo
// Follow the assertion order above - we rely on it. Also, be sure to remove assert.fail() once complete.

// SOLUTION:
  // #3
  test('Send {surname: "Colombo"}', function (done) {
    chai
      .request(server)
      .keepOpen()
      .put('/travellers')
      .send({surname : 'Colombo'})
      .end(function (err, res) {
        assert.equal(res.status, 200);
         assert.equal(res.type, 'application/json', 'Response should be json');
    assert.equal(
      res.body.name,
      'Cristoforo',
      'res.body.name should be "Christoforo"'
    );
    assert.equal(
      res.body.surname,
      'Colombo',
      'res.body.surname should be "Colombo"'
    );
        done();
      });
  });