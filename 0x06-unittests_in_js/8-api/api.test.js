const chai = require('chai');
const expect = chai.expect;
const app = require('./api');
const request = require('request')

describe('api testing suite', (done)=> {
  // Test the status code of GET /

  it('should return a 200 status code', (done)=> {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for GET', (done)=> {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

})