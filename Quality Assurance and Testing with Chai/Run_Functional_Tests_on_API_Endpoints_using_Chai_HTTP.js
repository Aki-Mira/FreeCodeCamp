// DECRIPTION:
// As a reminder, this project is being built upon the following starter project on Replit, or cloned from GitHub.

// Mocha allows you to test asynchronous operations like calls to API endpoints with a plugin called chai-http.

// The following is an example of a test using chai-http for a suite called 'GET /hello?name=[name] => "hello [name]"':

// suite('GET /hello?name=[name] => "hello [name]"', function () {
//   test('?name=John', function (done) {
//     chai
//       .request(server)
//       .keepOpen()
//       .get('/hello?name=John')
//       .end(function (err, res) {
//         assert.equal(res.status, 200, 'Response status should be 200');
//         assert.equal(res.text, 'hello John', 'Response should be "hello John"');
//         done();
//       });
//   });
// });
// The test sends a GET request to the server with a name as a URL query string (?name=John). In the end method's callback function, the response object (res) is received and contains the status property.

// The first assert.equal checks if the status is equal to 200. The second assert.equal checks that the response string (res.text) is equal to "hello John".

// Also, notice the done parameter in the test's callback function. Calling it without an argument at the end of a test is necessary to signal that the asynchronous operation is complete.

// Finally, note the keepOpen method just after the request method. Normally you would run your tests from the command line, or as part of an automated integration process, and you could let chai-http start and stop your server automatically.

// However, the tests that run when you submit the link to your project require your server to be up, so you need to use the keepOpen method to prevent chai-http from stopping your server.

// Within tests/2_functional-tests.js, alter the 'Test GET /hello with no name' test (// #1) to assert the status and the text of the response to make the test pass. Do not alter the arguments passed to the asserts.

// There should be no URL query. Without a name URL query, the endpoint responds with hello Guest.

// SOLUTION:
 // #1
 test('Test GET /hello with no name', function (done) {
    chai
      .request(server)
      .keepOpen()
      .get('/hello')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'hello Guest');
        done();
      });